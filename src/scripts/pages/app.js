import routes from '@sc/routes/routes';
import UrlParser from '@sc/routes/url-parser';
import { generatePageNotFound404Template } from '@pg/components/template';

export default class App {
  #content;
  #navigation;

  constructor({content, navigation}) {
    this.#content = content;
    this.#navigation = navigation;
  }

  async updateNavbar() {
    const navbarContainer = document.getElementById('navbar');
    if (navbarContainer) {
      navbarContainer.innerHTML = this.#navigation.render();
      this.#navigation.afterRender();
    }
  }

  async renderPage() {
    await this.updateNavbar();

    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    if (!page) {
      document.title = '404 - Not Found';
      this.#content.innerHTML = generatePageNotFound404Template();
      if (typeof feather !== "undefined") feather.replace();
      return;
    }

    document.title = page._pageTitle || 'SkinSync';

    if (document.startViewTransition) {
      await document.startViewTransition(async () => {
        this.#content.innerHTML = await page.render();
        await page.afterRender();
        if (typeof feather !== "undefined") feather.replace();
      });
    } else {
      this.#content.innerHTML = await page.render();
      await page.afterRender();
      if (typeof feather !== "undefined") feather.replace();
    }
  }
}
