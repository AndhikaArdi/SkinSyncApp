import HomePresenter from "./home-presenter";
import { generateHomeTemplate } from "@pg/components/template";

export default class HomePage {
  #presenter;

  constructor() {
    this._pageTitle = "";
  }

  async render() {
    return `<section class="container-home-view" id="home">memuat ...</section>`;
  }

  async afterRender() {
    this.#presenter = new HomePresenter({
      view: this,
    });

    await this.#presenter._renderView();
  }

  _renderView() {
    const container = document.querySelector("#app");
    container.innerHTML = generateHomeTemplate();
  }

  _applyEntranceAnimation() {
    const content = document.querySelector(".container-home-view .content");
    if (content) {
      setTimeout(() => {
        content.classList.toggle("is-animated"); // menambah class untuk animasi css
      }, 100);
    }
  }
}
