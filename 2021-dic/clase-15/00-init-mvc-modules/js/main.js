// import * as Todo from './classes/index.js';
// const app = new Todo.ProductoController(
//     new Todo.ProductoModel(), 
//     new Todo.ProductoView()
// );

import ProductoController from "./classes/ProductoController.js";
import ProductoModel from "./classes/ProductoModel.js";
import ProductoView from "./classes/ProductoView.js";

const app = new ProductoController(
    new ProductoModel(), 
    new ProductoView()
);


