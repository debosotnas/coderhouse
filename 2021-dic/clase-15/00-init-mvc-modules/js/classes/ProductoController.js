class ProductoController {
    constructor(productoModel, productoView) {

        this.productoModel  = productoModel;
        this.productoView   = productoView;

        // const that = this;
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

export default ProductoController;
