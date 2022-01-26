// Clase 08

// Obtener el valor de un input
// const miInput = document.getElementById('nombreUsuario');
// console.log(miInput.value) // si quiero leer el valor que se encuentra en este momento

/*
class Elemento {

    constructor() {
        this.nombres = [];
    }

    agregarFrase(frase) {
        this.nombres.push(frase);
    }

    agregarNombre(nombre) {
        const fraseNombre = `este es un nuevo nombre: ${nombre}`;
        this.agregarFrase(fraseNombre);
    }

    agregarNombres(arrayDeNombres) {
        this.nombres = arrayDeNombres;
    }

    agregarAlDom() {
        const elementoPadre = document.getElementById('contenido');
        for (const nombre of this.nombres) {
            //Creamos un nodo <li> y agregamos al padre en cada ciclo
            const li = document.createElement("li");
            li.innerHTML = nombre;
            elementoPadre.appendChild(li);
        }        
    }

}

// -------------------

const elemento = new Elemento();
elemento.agregarNombres(["HOMERO","MARGE", "BART", "LISA", "MAGGIE"]);
elemento.agregarFrase('hola, esta es una frase');
elemento.agregarNombre('obed');
elemento.agregarAlDom();

*/

// CLASE 11
//=========


// nodejs
/*
if (!$) {
    // paso algo y no cargo el CDN
    // cargar de mi servidor local
    // ...
}
*/

// get element y en el inner pasan cosas (html)
// con el DOM
// tomamos 1 elemento, creo un elemento y lo agrego al que tomé
// appendChild



/*
class Elemento {

    constructor(idBoton) {
        const boton = document.getElementById(idBoton);
        // const boton = $('#' + idBoton);
        // const boton = $(`#${idBoton}`);
        boton.addEventListener("click", this.manejadorAgregarNombre);
    }

    manejadorAgregarNombre() {
        // const list = document.getElementById("mi-ul");
        // const item = document.createElement('li');
        // const value = document.getElementById('nombreUsuario').value;
        // item.innerHTML = value;
        // list.appendChild (item);

        // const list = $("#mi-ul");
        // const value = $('#nombreUsuario').val();
        // list.append(`<li>${value}</li>`);

        // esto equivale a lo anterior
        $("#mi-ul").prepend(`<li>${$('#nombreUsuario').val()}</li>`);

    }

}

const miBoton = new Elemento("agregarNombre");


// -------------------------------

const productos = [
    { id: 1,  nombre: "Arroz", precio: 125 },
    {  id: 2,  nombre: "Fideo", precio: 70 },
    {  id: 3,  nombre: "Pan"  , precio: 50},
    {  id: 4,  nombre: "Flan" , precio: 100}
];

for (const producto of productos) {
    $("#app").append(`<div><h3> ID: ${producto.id}</h3>
    <p>  Producto: ${producto.nombre}</p>
    <b> $ ${producto.precio}</b></div>`);
}

*/

// Realizar un algoritmo que:
// - una tienda virtual simple
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

    console.log('agregar a carrito!: ', productoEncontrado);
    // const objetoAAgregarAlCarrito = {
    //     ...productoEncontrado //spread
    // };
    carrito.push(productoEncontrado);
    listarCarrito();
}

for (const producto of productos) {
    $('#mi-ul').append(`<li>${producto.nombre} 
        - <button onclick="agregarACarrito(${producto.id})">Agregar</button> </li>`);
}

function listarCarrito() {
    for (const producto of carrito) {
        // $('#mi-carrito').html('');
        $('#mi-carrito').append(`<li> ${producto.nombre}</li>`);
    }    
}
