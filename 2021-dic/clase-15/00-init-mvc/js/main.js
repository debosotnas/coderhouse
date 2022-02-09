// --------------------- CONTROLLER
class ProductoController {
    constructor(productoModel, productoView) {

        this.productoModel  = productoModel;
        this.productoView   = productoView;

        this.productoView.agregarProducto('#pag1', (event) =>{

            let hijos = $(event.target).parent().children();
            this.productoModel.agregarProducto({
                id: this.productoModel.productos.length + 1,
                nombre: hijos[1].value,
                precio: hijos[2].value,
            });

        });
    }
}

// --------------------- MODEL
class ProductoModel {
    constructor() {
      const productos = JSON.parse(localStorage.getItem('productos')) || [];
      this.productos  = productos.map(producto => new Producto(producto));
    }
    
    guardarProductos() {
      localStorage.setItem('productos', JSON.stringify(this.productos));
    }
  
    agregarProducto(producto) {
      this.productos.push(new Producto(producto));
      this.guardarProductos();
    }
}

// --------------------- VIEW
class ProductoView {
    listarProductos(padre, data, callback){
        let html = '';
        for (const producto of data) {
             html+=`<div>
                        <input value="${producto.id}" type="hidden">
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button class="btnComprar">Comprar</button>
                    </div>`;
        }
        $(padre).html(html);
        $(".btnComprar").click(callback);
    }
}

// --------------------- CONFIGURAMOS Y MOSTRAMOS LA APP
// const app = new ProductoController(new ProductoModel(), new ProductoView());


const modelo = new ProductoModel();
const vista = new ProductoView();
const app = new ProductoController(modelo, vista);


