// Clase 07


// EJEMPLO 1
// console.log('Valor en sessionStorage: ', sessionStorage.getItem('nombreIngresado'))
// console.log('Valor en localStorage: ', localStorage.getItem('edadIngresada'))

// const nombre = prompt('ingrese un nombre de estudiante');
/*
sessionStorage.setItem('nombreIngresado', 'alumno brillante');

// const edad = prompt('ingrese una edad');
sessionStorage.setItem('edadIngresada', 19);


for (let i = 0; i < sessionStorage.length; i++) {
    let clave = sessionStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ sessionStorage.getItem(clave));
}

*/


// EJEMPLO 2
// for (let i = 0; i < ; i++) {
//     let clave = sessionStorage.key(i);
//     console.log("Clave: "+ clave);
//     console.log("Valor: "+ sessionStorage.getItem(clave));
// }

// const retorno = Object.keys(sessionStorage)
// retorno.length


// Object.keys(sessionStorage).length


/*

const multiplicar  = (a, b) => { return a * b };
const multiplicar  = (a, b) => a * b;

const multiplicar  = function (a, b) {
    return a * b
}

function multiplicar (a, b) {
    return a * b
}

*/



// localStorage.setItem('datos', estudiante)


/*
---- xml
<estudiante>
    <nombre>nombre del estudiante</nombre>
    <edad>19</edad>
    <nac>arg</nac>
</estudiante>
*/

/*
{
    "nombre": "nombre del estudiante",
    "edad": 19,
    "nacionalidad": "arg",
    "comeAsado": true,
    "gustosMusicales": [
        {
            "tipo": "rock",
            "cantante": "papo"
        },
        {
            "tipo": "clasico",
            "cantante": "charly"
        }
    ]
}
*/

/*
GUARDAMOS EL ESTUDIANTE

const estudiante = { 
    nombre: 'nombre del estudiante',
    edad: 19,
    nacionalidad: 'arg',
    gustosMusicales: [
        {
            tipo: "rock",
            cantante: "papo"
        },
        {
            tipo: "clasico",
            cantante: "charly"
        }
    ]
}

// https://jsonformatter.curiousconcept.com/

const estudianteJson = JSON.stringify(estudiante);
// '{"nombre":"nombre del estudiante","edad":19,"nacionalidad":"arg","gustosMusicales":[{"tipo":"rock","cantante":"papo"},{"tipo":"clasico","cantante":"charly"}]}'
localStorage.setItem('datos', estudianteJson)

*/

/*
//LEER EL ESTUDIANTE
const estudianteGuardadoEnJson = localStorage.getItem('datos');

const estudianteObj = JSON.parse(estudianteGuardadoEnJson);

console.log(estudianteObj)
*/

/* 
EJEMPLO 3 - PPT 

const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

*/

/*
class Producto {
    constructor(obj) {
        this.nombre  = obj.producto.toUpperCase();
        this.precio  = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.

// for (const objeto of almacenados) {
//     const instanciaProducto = new Producto(objeto);
//     productos.push(instanciaProducto);
// }

for (const objeto of almacenados) {
    productos.push(new Producto(objeto));
}
    // const instanciaProducto = new Producto(objeto);
    // productos.push(instanciaProducto);

//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of productos) {
    producto.sumaIva();
}

*/


const myArray = ['esto', 'es', 'una', 'frase', 'desde', 'un', 'array']

const arrayReducido = myArray.reduce((prev, curr) => {
    console.log('valor previo: ', prev);
    return prev + ' ' + curr;
}, '');

console.log('resultado (array reducido): ', arrayReducido);

