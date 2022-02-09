import Page from "./Page.js";

class AppView {
    renderPage(pageData) {
        const page = new Page(pageData);
        const htmlPage = page.getPageContent();
        $('#app').html(htmlPage);
    }
}

export default AppView;