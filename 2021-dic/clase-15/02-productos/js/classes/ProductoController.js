class ProductoController {
    //CONSTRUCTOR DEL CONTROLADOR ASOCIANDO UN MODELO Y VISTA
    constructor(productoModel, productoView) {
        this.productoModel = productoModel;
        this.productoView = productoView;
    }

    //METODO PARA GENERAR-CONTROLAR LA VISTA, EL MODELO Y EL EVENTO AL AGREGAR UN PRODUCTO
    agregar(app) {
        this.productoView.agregarProducto(app, (event) => {
            let hijos = $(event.target).parent().children();
            this.productoModel.agregarProducto({
                id: this.productoModel.productos.length + 1,
                nombre: hijos[1].value,
                precio: hijos[2].value,
            });
        });
    }
    //METODO PARA GENERAR-CONTROLAR LA VISTA, EL MODELO Y EL EVENTO AL LISTAR PRODUCTOS
    listar(app) {
        this.productoView.listarProductos(app,
            this.productoModel.productos,
            (event) => {
                let hijos = $(event.target).parent().children();
                console.log(hijos[0].value);
            });
    }
    //METODO PARA GENERAR-CONSTROLAR LA VISTA, EL MODELO Y EL EVENTO AL BUSCAR UN PRODUCTO
    buscar(app) {
        this.productoView.buscarProducto(app, (event) => {
            let hijos = $(event.target).parent().children();
            let id = parseInt(hijos[1].value);
            let encontrado = this.productoModel.buscarProducto(id);

            this.productoView.mostrarProductoEncontrado(app, encontrado);
        });
    }

    error(app) {
        this.productoView.mostrarErrorPage(app);
    }
}

export default ProductoController;