export default class AnalyzePresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
    this._selectedFile = null;
    this._resultML = null;
    this._resultRecommendation = null;
  }

  async _renderView() {
    this.#view._renderView();
    this.#view._applyEntranceAnimation();
  }

  _handleFileSelect(file) {
    if (
      !file ||
      !file.type.startsWith("image/") ||
      file.size > 5 * 1024 * 1024
    ) {
      this.#view._showNotification(
        "Harap pilih file gambar yang valid dan kurang dari 5MB.",
        "error",
      );
      return;
    }

    this._selectedFile = file;

    const reader = new FileReader();
    reader.onload = (e) => this.#view._renderPreview(e.target.result);
    reader.readAsDataURL(file);
  }

  async _handleAnalyze() {
    this.#view._renderAnalysisLoading();

    try {
      this._resultML = await this.#model.analyzeSkin(this._selectedFile);
      this._resultRecommendation = await this.#model.getRecommendation(this._resultML.type);
      this.#view._renderAnalyzeResult(this._resultRecommendation);
      this.#view._updateAnalyzeCard();
    } catch (error) {
      console.error("Analysis failed:", error);
      this.#view._showNotification(
        "Analisis gagal. Silakan coba lagi.",
        "error",
      );
      this._handleReset();
    }
  }

  _handleReset() {
    this._selectedFile = null;
    this.#view._resetView();
  }

  _handleShare() {
    const {
      type,
      description,
      recommendations,
    } = this._resultRecommendation;

    const shareText = [
      "🧪 Hasil Analisis Kulit Saya (SkinSync):",
      `• Jenis Kulit: ${type}`,
      `• Deskripsi: ${description}`,
      recommendations && recommendations.length > 0
        ? `• Rekomendasi: ${recommendations.map((r, i) => `\n   ${i + 1}. ${r}`).join("")}`
        : "• Rekomendasi: Tidak tersedia.",
      "\nAnalisis ini dibuat dengan SkinSync App.",
    ].join("\n");

    if (navigator.share) {
      navigator
        .share({
          title: "Hasil Analisis Kulit - SkinSync",
          text: shareText,
          url: window.location.href,
        })
        .catch((err) => {
          console.error("Web Share gagal:", err);
          this.#view._showNotification(
            "Gagal membagikan melalui sistem.",
            "error",
          );
        });
    } else if (navigator.clipboard) {
      navigator.clipboard
        .writeText(shareText)
        .then(() => {
          this.#view._showNotification(
            "Hasil berhasil disalin ke clipboard!",
            "success",
          );
        })
        .catch(() => {
          this.#view._showNotification("Gagal menyalin ke clipboard.", "error");
        });
    } else {
      this.#view._showNotification(
        "Browser tidak mendukung fitur berbagi atau salin.",
        "error",
      );
    }
  }

  _handleSave() {
    if (!this._resultRecommendation) {
      this.#view._showNotification(
        "Belum ada hasil untuk disimpan.",
        "warning",
      );
      return;
    }

    const saveResult = this.#model._saveAnalysisToLocal(this._resultRecommendation);

    if (saveResult.success) {
      this.#view._showNotification(
        "Hasil berhasil disimpan ke local storage!",
        "success",
      );
    } else {
      this.#view._showNotification("Gagal menyimpan hasil.", "error");
    }
  }
}
