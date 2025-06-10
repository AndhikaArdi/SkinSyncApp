import HomePage from "@pg/home/home-page";
import AboutPage from "@pg/about/about-page";

const routes = {
    '/' : new HomePage(),
    '/about' : new AboutPage(),
};

export default routes;