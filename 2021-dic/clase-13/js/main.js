// Desde Clase 12 - jQuery: selectores y eventos
// ==============================
//
// Realizar una tienda virtual simple
    // - listar productos
    // - agregarlos a un carrito
    // - calcular el total

class Carrito {
    constructor() {
        this.productos = [];
        this.productosEnCarrito = [];
        this.cargarProductos();
    }

    cargarProductos() {
        // Aqui en el futuro, voy a poder traer datos usando AJAX
        // (cargar datos desde un archivo)
        this.productos.push({id: 1, nombre: "Arroz", precio: 125, stock: 2 });
        this.productos.push({id: 2, nombre: "Fideo", precio: 70, stock: 2 });
        this.productos.push({id: 3, nombre: "Pan"  , precio: 50, stock: 2});
        this.productos.push({id: 4, nombre: "Flan" , precio: 100, stock: 2});
    }

    listarProductos() {
        for (const producto of this.productos) {
            $('#mi-ul').append(`<li id="producto-${producto.id}">${producto.nombre}
                    <button id="btn${producto.id}" class="boton">Agregar</button> </li>`);
        
            $(`#btn${producto.id}`).on('click',
                () => {
                    this.agregarACarrito(producto);
                }
            );
        }        
    }

    listarCarrito() {
        $("#mi-carrito li").remove();
        for (const producto of this.productosEnCarrito) {
            $('#mi-carrito').append(`<li> ${producto.nombre}</li>`);
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
        // MAP
        // const nuevoArrayDeProductos = this.productos.map(function (producto) {
        //     console.log('producto:', producto);
            // return producto;
            // return producto.nombre;


            // return {
            //     nombre: producto.nombre,
            //     precio: producto.precio,
            //     id: producto.id,
            //     stock: producto.stock
            // }

            // Operador Spread 
        //     return {
        //         ...producto
        //     }
        // });

        // console.log('this.productos: ', this.productos);
        // console.log('nuevoArrayDeProductos: ', nuevoArrayDeProductos);

        const productoEncontrado = this.productos.find(producto => productoEnStock.id === producto.id);
        productoEncontrado.stock = productoEncontrado.stock - 1;

        if (productoEncontrado.stock <= 0) {
            // debo ocultar y eliminar el elemento en el DOM
            this.removeElementWithAnimation(productoEncontrado.id);
        }

        // console.log('productoEncontrado: ', productoEncontrado);
        console.log('this.productos: ', this.productos);
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

// ------------------------------------------------

$(".block").hide();
/*

$("body").prepend('<h3  style="display: none" >¡Hola Coder1!</h3>');
$("body").prepend('<h3  style="display: none" >¡Hola Coder2!</h3>');
//Mostramos con show() todos los <h3>
// $("h3").show(); 

function ocultarMiDiv() {
    $('.animate-0').hide();
}

function mostrarMiDiv() {
    $('.animate-0').show();
}

const VELOCIDAD = 4000;
// -------------------------------

function ocultarDiv(item) {
    $('.animate-' + item).hide();
}

function mostrarDiv(item) {
    $(`.animate-${item}`).show();
}

function agregarClase(item, clase) {
    $(`.${item}`).addClass(clase);
}

function quitarClase(item, clase) {
    $(`.${item}`).removeClass(clase);
}

function fadeItemIn(item) {
    $(`.${item}`).fadeIn(VELOCIDAD, () => {
        console.log('completo!');
        $(`.${item}`).fadeOut(VELOCIDAD, () => {
            
        });
    });

}

function SlideItemOut(item) {
    $(`.${item}`).slideUp(VELOCIDAD);
}
function SlideItemIn(item) {
    $(`.${item}`).slideDown(VELOCIDAD, () => {
        console.log('termino mostrar!')
    });
}

function slideToggle (item) {
    $(`.${item}`).toggle(VELOCIDAD);
}

function ocultarFadeMostrarSlide(clase) {
    // $(`.${clase}`).fadeOut(2000).slideDown(2000);
    // $(`.${clase}`).fadeOut(2000);
    $(`.${clase}`).fadeOut({
        duration: 2000,
        queue: false        
    });
    // console.log('fade complete!');
    // $(`.${clase}`).slideDown(2000, {
    $(`.${clase}`).slideUp({
        duration: 2000,
        queue: false
    });
}

*/