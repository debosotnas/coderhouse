// Clase 14 - Uso de Ajax
// ==============================

class Carrito {
    constructor() {
        this.productos = [];
        this.productosEnCarrito = [];
        this.cargarProductos();
    }

    cargarProductos() {

        // $.getJSON('./data/productos.json', (response, status) => {
        $.get('./data/productos.json', (response, status) => {

            if (status === "success") {
                this.productos = response.productos;
                this.listarProductos();
            }

            // this.productos.push({id: 1, nombre: "Arroz", precio: 125, stock: 2 });
            // this.productos.push({id: 2, nombre: "Fideo", precio: 70, stock: 2 });
            // this.productos.push({id: 3, nombre: "Pan"  , precio: 50, stock: 2});
            // this.productos.push({id: 4, nombre: "Flan" , precio: 100, stock: 2});
    
        });

    }

    listarProductos() {
        for (const producto of this.productos) {
            $('#productos-disponibles')
                .append(`<div class="producto" id="producto-${producto.id}">
                        <h4>${producto.nombre}</h4>
                        <div class="image" style="background-image:url('imgs/${producto.image}')"></div>
                    <div class="downline">
                        En stock: <span>${producto.stock}</span>
                        <br /> 
                        <button id="btn${producto.id}" class="boton">Agregar al Carrito</button>
                    </div>
                </div>`);
        
            $(`#btn${producto.id}`).on('click',
                () => {
                    this.agregarACarrito(producto);
                }
            );
        }        
    }

    listarCarrito() {
        $("#mi-carrito > div").remove();
        for (const producto of this.productosEnCarrito) {
            $('#mi-carrito').append(
                `<div class="producto">
                        <h4>${producto.nombre}</h4>
                        <div class="image" style="background-image:url('imgs/${producto.image}')"></div>
                    <div class="downline">
                        Precio: <span>${producto.precio}</span>
                    </div>
                </div>`                
            );
        }
    } 

    agregarACarrito(productoAAgregar) {
        $('#mi-carrito').slideUp(400, () => {
            this.productosEnCarrito.push(productoAAgregar);

            this.actualizarStock(productoAAgregar);

            this.listarCarrito();
            this.actualizarTotal();

            $('#mi-carrito').slideDown();
        });
    }

    actualizarStock(productoEnStock) {
        const productoEncontrado = this.productos.find(producto => productoEnStock.id === producto.id);
        productoEncontrado.stock = productoEncontrado.stock - 1;

        this.updateStockProducto(productoEncontrado);

        if (productoEncontrado.stock <= 0) {
            // debo ocultar y eliminar el elemento en el DOM
            this.removeElementWithAnimation(productoEncontrado.id);
        }

    }

    updateStockProducto(producto) {
        $(`#producto-${producto.id}`).children('.downline').children('span').html(producto.stock);
    }

    removeElementWithAnimation(id) {
        $(`#producto-${id}`).slideUp(2000, function () {
            $(`#producto-${id}`).remove();
        })
    }

    actualizarTotal() {
        const suma = this.productosEnCarrito.reduce((valp, obj) => valp + obj.precio, 0);
        $("#total-carrito").html(suma);
    }
}

const carrito = new Carrito();
carrito.listarProductos();
