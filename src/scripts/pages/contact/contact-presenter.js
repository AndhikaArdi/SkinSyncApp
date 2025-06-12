export default class ContactPresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
    this._pageTitle = "Contact - SkinSync";
  }

  async _renderView() {
    this.#view._renderView();
    this.#view._applyEntranceAnimation();
  }

  _handleSubmit(formData) {
    const saveResult = this.#model._saveSubmitedForm(formData);

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
