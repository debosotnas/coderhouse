
class AppController {
    constructor(m, v) {
        this.model = m;
        this.view = v;
    }
    configurePage(pageDetails) {
        this.model.setPage(pageDetails);
    }
    renderPage(pagePath) {
        const pageToRender = this.model.getPage(pagePath);
        this.view.renderPage(pageToRender);
    }
}

export default AppController;