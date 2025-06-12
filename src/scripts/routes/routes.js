import HomePage from "@pg/home/home-page";
import AboutPage from "@pg/about/about-page";
import AnalyzePage from "../pages/analyze/analyze-page";
import ContactPage from "../pages/contact/contact-page";

const routes = {
    '/' : new HomePage(),
    '/about' : new AboutPage(),
    '/analyze' : new AnalyzePage(),
    '/contact' : new ContactPage(),
};

export default routes;