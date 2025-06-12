export default class ContactModel {
  // Untuk saat ini pakai local storage dulu
  _saveSubmitedForm(formData) {
    const formDataToSave = {
      ...formData,
      date: new Date().toISOString(),
      id: Date.now(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem("submitedForm")) || [];
      existing.push(formDataToSave);
      localStorage.setItem("submitedForm", JSON.stringify(existing));
      return { success: true };
    } catch (e) {
      console.error("Gagal menyimpan ke localStorage:", e);
      return { success: false, error: e };
    }
  }
}
