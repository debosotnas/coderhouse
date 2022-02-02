// Clase 11

// Clase 11 - jQuery y selectores
// ==============================
//
// Realizar una tienda virtual simple
    // - listar productos
    // - agregarlos a un carrito
    // - calcular el total

const carrito = [];

const productos = [
        { id: 1,  nombre: "Arroz", precio: 125 },
        {  id: 2,  nombre: "Fideo", precio: 70 },
        {  id: 3,  nombre: "Pan"  , precio: 50},
        {  id: 4,  nombre: "Flan" , precio: 100}
];

function agregarACarrito(idDelProducto) {

    const productoEncontrado = productos.find(p => p.id === idDelProducto);

    // console.log('agregar a carrito!: ', productoEncontrado);
    // const objetoAAgregarAlCarrito = {
    //     ...productoEncontrado //spread
    // };
    carrito.push(productoEncontrado);

    listarCarrito();

    actualizarTotal();
}

for (const producto of productos) {
    $('#mi-ul').append(`<li>${producto.nombre} 
        - <button onclick="agregarACarrito(${producto.id})">Agregar</button> </li>`);
}

function listarCarrito() {
    // es necesario "vaciar/limipiar" el "listado" antes de volver a listar todo

    // aqui en la siguiente linea debemos "limpiar" la UL:
    $("#mi-carrito li").remove();

    for (const producto of carrito) {
        $('#mi-carrito').append(`<li> ${producto.nombre}</li>`);
    }
}

function actualizarTotal() {
    // recorra el carrito
    // sume valores individuales de los productos en ese array (carrito)
    // actualice el HTML/DOM con el valor total
/*
    let suma = 0;
    for (const producto of carrito) {
        suma += producto.precio;
    }

    $("#total-carrito").html(suma);
*/

    // const suma = carrito.reduce(function (valorPrevio, objetoActual) {
    //     console.log('valorPrev: ', valorPrevio , ' - objActual: ', objetoActual);
    //     return valorPrevio + objetoActual.precio;
    // }, 0);

    // const suma2 = carrito.reduce((valorPrevio, objetoActual) => {
    //     return valorPrevio + objetoActual.precio;
    // }, 0);    

    //version mas simplificada
    const suma2 = carrito.reduce((valp, obj) => valp + obj.precio, 0);

    // console.log('suma total: ', suma2);

    $("#total-carrito").html(suma2);
}

// agregar listener y mostrar en consola el valor del select
document.getElementById('mi-btn')
    .addEventListener('click', 
        () => console.log(
                $('#mi-lista').val()
              )
    );

// document.getElementById('mi-lista').value
