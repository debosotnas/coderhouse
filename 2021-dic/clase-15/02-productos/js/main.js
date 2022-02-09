import ProductoController from "./classes/ProductoController.js";
import ProductoModel from "./classes/ProductoModel.js";
import ProductoView from "./classes/ProductoView.js";
import Router from "./classes/Router.js";

const model = new ProductoModel();
const view = new ProductoView();
const app = new ProductoController(model, view);
// const app = new ProductoController(new ProductoModel(), new ProductoView());

const router = new Router(app);
router.configureAndStartRouter();