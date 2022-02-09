const ROUTES = [
    { path: '/'       , action: 'agregar' }, // tanto '/' como '/home' llevan a la misma pagina inicial
    { path: '/home'   , action: 'agregar' },
    { path: '/pagina1', action: 'listar' },
    { path: '/pagina2', action: 'buscar' },
  ];

class Router {

    constructor(app) {
        this.app = app;
    }

    configureAndStartRouter() {
        //CADA VEZ QUE SE DETECTA LA CARGA DE LA VENTANA SE LLAMA A LA FUNCION RENDER
        $(window).on('load', () => {
            this.render();
        });
        //CADA VEZ QUE SE DETECTA UN CAMBIO EN EL HASH (EJEMPLO la URL CAMBIA DE #/pagina1 a #/pagina2) SE LLAMA A LA FUNCION RENDER
        $( window ).on('hashchange', () => {
            this.render();
        });
    }

    parseLocation () {
        return location.hash.slice(1).toLowerCase() || '/';
    }

    findActionByPath (path) {
        // return { path: '/pagina1', action: 'listar' }
        return ROUTES.find(r => r.path == path || undefined);
    }

    render () {
        //OBTENER RUTA ACTUAL
        const path = this.parseLocation(); 
        const { action = 'error' } = this.findActionByPath(path) || {}; 
        // LLAMAMOS AL MÈTODO CORRESPONDIENTE PARA LA ACCIÒN ENCONTRADA
        
        switch (action) {
          case 'agregar':
            this.app.agregar('#app');
            break;
          case 'listar':
            this.app.listar('#app');
            break;
          case 'buscar':
            this.app.buscar('#app');
            break;
          default:
            this.app.error('#app');
            break;
        }
      };
}

export default Router;