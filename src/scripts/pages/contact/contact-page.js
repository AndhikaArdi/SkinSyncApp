import { generateContactTemplate } from "../components/template";
import ContactModel from "./contact-model";
import ContactPresenter from "./contact-presenter";

export default class ContactPage {
  #presenter;

  constructor() {
    this._pageTitle = "Contact - SkinSync";
  }

  async render() {
    return `<section class="container-contact-view" id="contact">memuat ...</section>`;
  }

  async afterRender() {
    this.#presenter = new ContactPresenter({
      view: this,
      model: new ContactModel(),
    });

    await this.#presenter._renderView();

    this.#bindSubmitForm();
  }

  _renderView() {
    const container = document.querySelector("#app");
    container.innerHTML = generateContactTemplate();
  }

  _showNotification(message, type) {
    alert(`${type.toUpperCase()}: ${message}`);
  }

  _applyEntranceAnimation() {
    const row = document.querySelector(".container-contact-view .row");
    if (row) {
      setTimeout(() => {
        row.classList.toggle("is-animated"); // menambah class untuk animasi css
      }, 100);
    }
  }

  #bindSubmitForm(callback) {
    const form = document.querySelector("#contact-form");
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        return;
      }

      e.preventDefault();

      const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        subject: form.subject.value,
        message: form.message.value.trim(),
      };

      this.#presenter._handleSubmit(formData);
    });
  }
}
