import AboutPresenter from "./about-presenter";
import { generateAboutTemplate } from "@pg/components/template";

export default class AboutPage {
  #presenter;

  constructor() {
    this._pageTitle = "About - SkinSync";
  }

  async render() {
    return `<section class="container-about-view" id="about">memuat ...</section>`;
  }

  async afterRender() {
    this.#presenter = new AboutPresenter({
      view: this,
    });

    await this.#presenter._renderView();
  }

  _renderView() {
    const container = document.querySelector("#app");
    container.innerHTML = generateAboutTemplate();
  }

  _applyEntranceAnimation() {
    const row = document.querySelector(".container-about-view .row");
    if (row) {
      setTimeout(() => {
        row.classList.toggle("is-animated"); // menambah class untuk animasi css
      }, 100);
    }
  }
}
