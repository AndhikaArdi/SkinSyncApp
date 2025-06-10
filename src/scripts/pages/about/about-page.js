import AboutPresenter from './about-presenter';
import { generateAboutTemplate } from '@pg/components/template';
import { generateAboutMainDescTemplate, generateAboutMainFeaturelistTemplate } from '../components/template';

export default class AboutPage {
  #presenter;

  async render() {
    return`<section class="container-about-view" id="about">memuat ...</section>`;
  }

  async afterRender() {
    this.#presenter = new AboutPresenter({
      view: this,
    });
    
    await this.#presenter._renderView();
  }
 
  _renderView() {
    const container = document.querySelector('#app');
    container.innerHTML = generateAboutTemplate();
  }

  _renderDesc() {
    const desc = document.querySelector('.content');
    desc.innerHTML = generateAboutMainDescTemplate();
  }

  _renderFeatures(){
    const features = document.querySelector('.features');
    features.innerHTML = generateAboutMainFeaturelistTemplate();
  }

  _applyEntranceAnimation() {
    const row = document.querySelector('.container-about-view .row');
    if (row) {

      setTimeout(() => {
        row.classList.toggle('is-animated'); // menambah class untuk animasi css
      }, 100);

    }
  }
}