import HomePage from "@pg/home/home-page";
import AboutPage from "@pg/about/about-page";
import AnalyzePage from "../pages/analyze/analyze-page";

const routes = {
    '/' : new HomePage(),
    '/about' : new AboutPage(),
    '/analyze' : new AnalyzePage(),
};

export default routes;