import AppController from "./AppController.js";
import AppModel from "./AppModel.js";
import AppView from "./AppView.js";
import Router from "./Router.js";

class App {
    constructor() {
        const model = new AppModel();
        const view = new AppView();
        this.app = new AppController(model, view);
        this.configurePages();
        this.configureRouter();
    }

    configurePages() {
        const homeInfo = {
            title: 'Home page',
            text: 'Bienvenidos a la home!'
        }
        this.app.configurePage({
            path: '/home',
            ...homeInfo
        });
        this.app.configurePage({
            path: '/',
            ...homeInfo
        });
        this.app.configurePage({
            images: [
                './imgs/01-arroz.jpeg',
                './imgs/02-fideo.jpeg',
                './imgs/03-pan.jpeg'
            ],
            path: '/pagina1',
            title: 'Página 1',
        
        })
        this.app.configurePage({
            path: '/pagina2',
            title: 'Página 2',
            text: 'Un postre que gusta mucho!',
            images: [
                './imgs/04-flan.jpeg'
            ]
        })        
    }

    configureRouter() {
        const router = new Router(this.app);
        router.configureAndStartRouter()        
    }
}

export default App;