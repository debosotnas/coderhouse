// Clase 06

/*
let usuarios = []
const autos = new Array();

autos = [] // xxxxx error
usuarios = []

// ----------- creación de OBJ literal

const usuario = {
    edad: 15,
    nombre: 'Carlos',
}

usuario = { } // error 
usuario.autos = autos;

// ------------------------- 

let usuarios = [] // creo un array vacío
const edades = [20, 1, 40, 50, 60] // creo un array con contenido
    // largo de "edades" es 5
/ *
20 está en el lugar 0
1 está en el lugar 1
40 está en el lugar 2
50 está en el lugar 3
60 está en el lugar 4
...
* /

class Tienda {
    // ...
}

const myTienda = new Tienda()
//--------------------------------------------

const tiendas = new Array() // Array es una clase ya existente de JS
*/

/*
let usuarios = ['carlos', 'soledad', 'eimy', 'mauro', 'ezequiel'];
usuarios.push('obed')

const autos = [];

autos.push('ford')
autos.push('fiat')
autos.push('renault')
autos.push('peugeot')

console.log('autos: ', autos)
console.log('largo de autos: ', autos.length)
// console.log('hola mi nombre es', usuarios[3])

// console.log(usuarios[0])
// console.log(usuarios[1])
// console.log(usuarios[2])
// console.log(usuarios[3])
// console.log(usuarios[4])


// 0 - 1 - 2 - 3 - 4 - 5
for (let i = 0; i < usuarios.length; i++){
    console.log('posicion: ', i, ' - nombre: ', usuarios[i])
    // console.log(`posicion: ${i} - nombre: ${usuarios[i]}`);
    // console.log(`posicion: ${i}`);
}

*/

/*
const nombre = prompt('ingrese un nombre')
const direccion = prompt('ingrese una dir')
const propietario = prompt('ingrese un propietario')
const color = prompt('ingrese un color')
const numeroDeRegistro = prompt('ingrese un Num de registro')

console.log(nombre);
console.log(direccion);
console.log(propietario);
console.log(color);
console.log(numeroDeRegistro);
*/

// array.split // --- crear un array apartir de un divisor buscado en un string

/*
const datos = prompt('ingrese sus datos separados por comas')
console.log(datos);
const datosProcesados = datos.split(',')

for(let i = 0; i < datosProcesados.length; i++) {
    console.log('dato: ', datosProcesados[i])
}

*/

/*
let usuarios = [' carlos', 'soledad', 'eimy', 'mauro', 'ezequiel'];
const estoEsUnString = usuarios.join(' -*- ');
console.log(estoEsUnString);
const autos = ['ford', 'fiat']
const estudiantes = ['facundo', 'emiliano', 'clara']

const res = usuarios.concat(autos, estudiantes)
console.log(res)

*/

/*
const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");

   listaNombres.push(entrada.toUpperCase());

   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));

*/

const usuarios = []

const autos = ['peugeot', 'ford']

const juan = {
    nombre: 'Juan',
    profesion: 'tutor/programador',
    edad: 20,
    autos
}

usuarios.push(juan)

usuarios.push({
    nombre: 'Mauro',
    profesion: 'tutor/programador',
    edad: 19,
    autos
})

// console.log(usuarios)
/*
for (let i = 0; i < usuarios.length; i++) {
    const miUsuario = usuarios[i];
    console.log(miUsuario);
}
*/
// -----------
/*
for (const miUsuarioIn in usuarios) { // for in - recupera las posiciones
    console.log(miUsuarioIn);
}
*/

// for (const miUsuario of usuarios) { // for of - recupera los valores (en cada posicion)
//     console.log(miUsuario);
// }

// usuarios.forEach(function (miUsuario) { // callback - funcion que se ejecuta por cada valor
//     console.log('mi usuario dentro de ForEach', miUsuario);
// });

/*

function mostrarUsuario (usuario) {
    usuario.nombre = 'pepe'
    
    // guardar en BBDD los datos del usuario
    // saveDB(usuario)

    console.log(usuario)
}

usuarios.forEach(mostrarUsuario);

*/

/*
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));

for (const producto of productos) {
    producto.sumaIva();
}

for (const producto of productos) { // for > of
    console.log(producto.precio);
    // console.log(productos.precio);
    // console.log(productos[1]);
}

*/

/*
function mostrarContenido(miObj) {
    console.log(miObj);
}

function comparar(miNumero) {
    const esMayorQue5 = miNumero > 5;
    return esMayorQue5;
}

// mostrarContenido({
//     nombre: 'obed',
//     edad: '19'
// });
// numeros.forEach(mostrarContenido) // a mostrarContenido se le esta pasando cada valor de 'numeros'

const numeros = [1,3,5,2,4,9,10]; // 7 es el length
const numerosFiltrados = numeros.filter(comparar);
console.log(numerosFiltrados);

*/
/*
const numeros = [1, 2, 3, 4, 5];
const filtro1 = numeros.filter(elemento => elemento > 3); //Encuentra [4,5]
const filtro2 = numeros.filter(elemento => elemento < 4); //Encuentra [1,2,3]

const nombres = ["Ana", "Ema", "Juan", "Elia"];
//Filtrar nombre que incluyen la letra "n" Encuentra ["Ana","Juan"]
const filtro3 = nombres.filter(elemento => elemento.includes("n"));

//------------

const filtro1 = numeros.filter(function(elemento) { return elemento > 3 }); //Encuentra [4,5]
*/

const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const buscarPan = productos.find(producto => producto.id === 3); 
console.log(buscarPan);//{id: 3, producto: "Pan", precio: 50}

const baratos = productos.filter(producto => producto.precio < 100); 
console.log(baratos);//
[{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const aumentos = productos.map(producto => producto.precio += 30);
console.log(aumentos);
//[155, 100, 80, 130] y el valor de cada producto cambio
