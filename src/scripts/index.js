import '@/styles/main.css';
import App from '@pg/app';
import Navigation from '@pg/components/navigation';

document.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    content: document.querySelector('#app'),
    navigation: new Navigation(),
  });
  
  await app.renderPage();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });
});
