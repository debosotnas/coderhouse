// After 05

/*

ACTIVIDAD 1 - BOOKLET

class Tienda {
    constructor (n, d, p, r) {
        this.nombre = n;
        this.domicilio = d;
        this.propietario = p;
        this.rubro = r;
    }
}

// ...luego instanciar
const tienda1 = new Tienda ("Almacén", "Berutti 4330", "Jorge", "Kiosco")
const tienda2 = new Tienda ("Comercio", "San Juan 3885", "Carlos", "Vineria")

// voy a crear una 3era instancia de Tienda
const tienda3 = new Tienda ('Tata', 'En la calle', 'Don tata', 'Super')

console.log(tienda1);
console.log(tienda2);
console.log(tienda3);

*/

// -----------------------------------------------

// ACTIVIDAD 2 - BOOKLET
/*
class Tienda {
    constructor (n, d, p, r) {
        this.nombre = n;
        this.domicilio = d;
        this.propietario = p;
        this.rubro = r;
    }
}

function crearTienda(){
    const nombre = prompt('ingrese nombre de la tienda');
    const domicilio = prompt('ingrese domicilio de la tienda');
    const propietario = prompt('ingrese propietario de la tienda');
    const rubro = prompt('ingrese rubro de la tienda');

    return new Tienda(nombre, domicilio, propietario, rubro);
}


for (let i = 0; i < 5; i++) {
    const nuevaTienda = crearTienda();
    console.log('la nueva tienda es: ', nuevaTienda)
}
*/

/*
for (let i = 0; i < 1; i++) {

    // const nuevaTienda = new Tienda(nombre, domicilio, propietario, rubro);
    const nuevaTienda = new Tienda(
            prompt('ingrese nombre de la tienda'), 
            prompt('ingrese domicilio de la tienda'), 
            prompt('ingrese propietario de la tienda'), 
            prompt('ingrese rubro de la tienda'));

    console.log('la nueva tienda es: ', nuevaTienda)
}

*/

// ACTIVIDAD 3 - BOOKLET

// función constructora ---------------------
// function Tienda(nombre) {
//     this.nombre = nombre
//     this.estaAbierto = function() {

//     }
// }
// ------------------------------------------
/*
class Tienda {
    constructor (n, d, p, r) {
        this.nombre = n;
        this.domicilio = d;
        this.propietario = p;
        this.rubro = r;
        this.horarioMinimo = 8;
        this.horarioMaximo = 12;
    }

    estaAbierto (hora) {
        // if (  (hora >= 8) && (hora <= 12) || (hora <= 19) && (hora >= 15)  ) {
        if ((hora >= this.horarioMinimo) && (hora <= this.horarioMaximo)) {
            return true;
        } else {
            return false;
        }
    }
}

function crearTienda(){
    const nombre = prompt('ingrese nombre de la tienda');
    const domicilio = prompt('ingrese domicilio de la tienda');
    const propietario = prompt('ingrese propietario de la tienda');
    const rubro = prompt('ingrese rubro de la tienda');

    return new Tienda(nombre, domicilio, propietario, rubro);
}

//-----
const otraNuevaTienda = crearTienda();
const hora1 = parseInt(prompt('ingrese un horario'));
const resultado = otraNuevaTienda.estaAbierto(hora1);
console.log('esta abierta?:', resultado);

//-----

- filtro de canciones
- preguntas de examen
- fix
- presupuestos freelance
- calculador de costos

//----

*/
let valorFinal = 0;
let compra = 0;
let cuotas = 0;

function monto () {
    compra = parseFloat(prompt("Ingrese el monto a calcular"));
}

function ingresarCuotas () {
    cuotas = parseFloat(prompt("Ingrese cantidad de cuotas" + "\n" + "RECARGO:" + "\n" + "3 CUOTAS: 15%" + "\n" + "6 CUOTAS: 30%" + "\n" + "12 CUOTAS: 40%"));
    switch (cuotas) {
        case 3:
            valorFinal = (compra * 1.15) / 3;
            console.log("Monto Ingresado: $" + compra + "\n" + "Cantidad de cuotas seleccionadas: " + cuotas + "\n" + "Recargo Generado: 15%" + "\n" + "El valor Final de cada cuota es de: $" + valorFinal);
            break;
        case 6:
            valorFinal = (compra * 1.30) / 6;
            console.log("Monto Ingresado: $" + compra + "\n" + "Cantidad de cuotas seleccionadas: " + cuotas + "\n" + "Recargo Generado: 30%" + "\n" + "El valor Final de cada cuota es de: $" + valorFinal);
            break;
        case 12:
            valorFinal = (compra * 1.40) / 12;
            console.log("Monto Ingresado: $" + compra + "\n" + "Cantidad de cuotas seleccionadas: " + cuotas + "\n" + "Recargo Generado: 40%" + "\n" + "El valor Final de cada cuota es de: $" + valorFinal);
            break;
        default:
            alert("ERROR: Ingrese una cantidad de cuotas de la lista solicitada.");
            break;
    }
}

monto ();
ingresarCuotas();

//--------------






class UI {
    constructor() {
        this.compra = 0;
    }
    mostrar(compra, cuotas, valorFinal){
        console.log("Monto Ingresado: $" + compra + "\n" + "Cantidad de cuotas seleccionadas: " + cuotas + "\n" + "Recargo Generado: 40%" + "\n" + "El valor Final de cada cuota es de: $" + valorFinal);
    }
    pedir() {
        compra = parseFloat(prompt("Ingrese el monto a calcular"));

    }
    pedirCuotas() {
        return cuotas = parseFloat(prompt("Ingrese cantidad de cuotas" + "\n" + "RECARGO:" + "\n" + "3 CUOTAS: 15%" + "\n" + "6 CUOTAS: 30%" + "\n" + "12 CUOTAS: 40%"));
    }
}

class Calculadora {
    constructor() {
        this.valorFinal = 0
    }
    calcular() {
        this.valorFinal = (compra * 1.15) / 3;
    }

    evaluar () {
        // aca va el switch
    }
}

const interface = new UI();
interface.pedir();
console.log(interface.compra);