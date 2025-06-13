import api from '@sc/data/api';

export default class AnalyzeModel {
  
  async analyzeSkin(file) {
    return api.analyzeSkin(file);
  }

  async getRecommendation(type) {
    return api.getRecommendation(type);
  }

  // Untuk saat ini pakai local storage dulu (simulasi)
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
