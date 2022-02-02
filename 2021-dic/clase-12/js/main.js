// Clase 12 - jQuery: selectores y eventos
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
        this.productos.push({id: 1, nombre: "Arroz", precio: 125 });
        this.productos.push({id: 2, nombre: "Fideo", precio: 70 });
        this.productos.push({id: 3, nombre: "Pan"  , precio: 50});
        this.productos.push({id: 4, nombre: "Flan" , precio: 100});
    }

    listarProductos() {
        for (const producto of this.productos) {
            $('#mi-ul').append(`<li>${producto.nombre}
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
        this.productosEnCarrito.push(productoAAgregar);
        this.listarCarrito();
        this.actualizarTotal();
    }

    actualizarTotal() {
        const suma = this.productosEnCarrito.reduce((valp, obj) => valp + obj.precio, 0);
        $("#total-carrito").html(suma);
    }
}

const carrito = new Carrito();
carrito.listarProductos();



//-----------------------
/*
window.addEventListener('DOMContentLoaded', function () {
    console.log('El DOM esta listo');
});


$(document).ready(function() {
   console.log( "El DOM esta listo 1" );
});

$(function() {
    console.log('El DOM esta listo 2');
});
*/


/*
function ejecutarCodigoConElContenidoListo() {
    //... aqui mi algoritmo
}

// --------- puedo enviar funciones en los params
// callback
window.addEventListener('DOMContentLoaded', ejecutarCodigoConElContenidoListo);
*/

// creo un escuchador para el evento 'click' de los elementos con la clase .boton
/*
$('.boton').on('click', function(evt) {
    console.log(evt)
})

$('.boton').click(function(evt) {

});
*/

// document.getElementById('mi-boton').addEventListener('click')

// document.getElementById('mi-boton').onclick = () => console.log('saludar!');

// agregando .change y .click
/*
$("#wrapper").prepend(`<input type="text"   class="inputsClass">
                   <input type="number" class="inputsClass">
                   <select class="inputsClass inputsClass2">
                        <option value="1" selected >ID 1</option>
                        <option value="2">ID 2</option>
                        <option value="3">ID 3</option>
                    </select>`);
//Asociamos el evento change a todos los inputs
$(".inputsClass").change(function (e) { 
    console.log(e.target.value);
    console.log(this.value);
});

$(".inputsClass2").click(function (e) { 
    console.log(this.value);
});
*/


