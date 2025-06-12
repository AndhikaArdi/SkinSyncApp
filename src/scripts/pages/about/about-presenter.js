export default class AboutPresenter {
  #view;

  constructor({ view }) {
    this.#view = view;
  }

  async _renderView() {
    this.#view._renderView();

    this.#view._applyEntranceAnimation();
  }
}
