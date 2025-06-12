import { skinTypes } from "@sc/data/result.js";

export default class AnalyzeModel {
  // Untuk saat ini pakai simulasi dulu
  async analyzeSkin(_selectedFile) {
    await this._simulateDelay();

    const randomIndex = Math.floor(Math.random() * skinTypes.length);
    const result = skinTypes[randomIndex];
    return result;
  }

  _simulateDelay() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  // Untuk saat ini pakai local storage dulu
  _saveAnalysisToLocal(result) {
    const resultToSave = {
      ...result,
      date: new Date().toISOString(),
      id: Date.now(),
    };

    try {
      const existing =
        JSON.parse(localStorage.getItem("analysisResults")) || [];
      existing.push(resultToSave);
      localStorage.setItem("analysisResults", JSON.stringify(existing));
      return { success: true };
    } catch (e) {
      console.error("Gagal menyimpan ke localStorage:", e);
      return { success: false, error: e };
    }
  }
}
