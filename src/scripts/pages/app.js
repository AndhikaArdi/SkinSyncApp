import routes from '@sc/routes/routes';
import UrlParser from '@sc/routes/url-parser';

export default class App {
    #content = null;

    constructor({ content }) {
    this.#content = content;
    }
  
    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
    
        if (document.startViewTransition) {
        await document.startViewTransition(async () => {
            this.#content.innerHTML = await page.render();
            await page.afterRender();
        });
        } else {
        this.#content.innerHTML = await page.render();
        await page.afterRender();
        }
    }
};