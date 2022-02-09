class Router {
    constructor(app) {
        this.app = app;
    }

    configureAndStartRouter() {
        // cada vez que se carga la página o se cambia la parte desp del '#' en 
        // la URL en el browser, se llama al método render
        $(window).on('load', () => {
            this.render();
        });
        $( window ).on('hashchange', () => {
            this.render();
        });
    }

    parseLocation () {
        // regresa lo que se encuentra desp del '#' en la URL del browser
        return location.hash.slice(1).toLowerCase() || '/';
    }

    render () {
        const path = this.parseLocation();
        this.app.renderPage(path);
    }
}

export default Router;