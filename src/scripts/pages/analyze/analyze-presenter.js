export default class AnalyzePresenter {
  #view;
 
  constructor({ view }) {
    this.#view = view;
    this._selectedFile = null;
  }
 
  async _renderView() {
    this.#view._renderView();
    this.#view._applyEntranceAnimation();
  }

  _handleFileSelect(file) {
    if (!file || !file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) {
        this.#view.showNotification(
        "Harap pilih file gambar yang valid dan kurang dari 5MB.",
        "error"
        );
        return;
    }

    this._selectedFile = file;

    const reader = new FileReader();
    reader.onload = (e) => this.#view._renderPreview(e.target.result);
    reader.readAsDataURL(file);
  }

} 