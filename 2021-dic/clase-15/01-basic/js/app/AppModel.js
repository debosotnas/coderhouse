class AppModel {
    constructor() {
        this.pages = {};
    }
    setPage (pageDetails) {
        this.pages[pageDetails.path] = {
            title: pageDetails.title,
            text: pageDetails.text,
            images: pageDetails.images
        }
    }
    getPage (pagePath) {
        let page = this.pages[pagePath];
        if (!page) {
            page = {
                title: '404 - Not found',
                text: 'La página no fue encontrada :('
            }
        } 
        return page;
    }
}

export default AppModel;