// Clase 04


// "Function Declaration"
// aca estoy creando mi funcion (estoy "declarando" la funcion)

// function cobrarComida () {
//     console.log('Ahora te voy a cobrar la comida')
// }
/*
function saludar () {
    console.log('hola coder!')
}

// const miVariable;
// let miOtraVariable;

const costoDeLaComida = prompt('ingrese costo de lo que consumió')
cobrarComida(costoDeLaComida);

*/

/*
function cobrarComida (monto) { // el 6 estara almacenado en 'monto'
    console.log('Ahora te voy a cobrar ', monto);  // 'Ahora te voy a cobrar 6'
}

cobrarComida(20);
*/

/* 
function pedirNombre() {
    const nombre = prompt('ingrese su nombre')
    // ... modificar mi nombre a mayusculas
    console.log('su nombre es: ', nombre)
}

pedirNombre();
pedirNombre();
pedirNombre();
*/

// return -----> "que valor debe REGRESAR/RETURNAR una funcion"
/*
function pedirNumero(mensaje) {
    const numero = prompt(mensaje);
    const numeroConvertido = parseInt(numero);
    return numeroConvertido;
}

function calcularSuma(num1, num2) {
    const suma = num1 + num2;
    console.log('el resultado de la suma es: ' , suma)
}

function calcularResta(num1, num2) {
    const resta = num1 - num2;
    console.log('el resultado de la resta es: ' , resta)
}

// --------------------



const numero1 = pedirNumero('ingrese un primer numero');
const numero2 = pedirNumero('ingrese un segundo numero');

calcularSuma(numero1, numero2)
calcularResta(numero1, numero2)
*/

/*

function calcularSuma(num1, num2) {
    const suma = num1 + num2;
    console.log('el resultado de la suma es: ' , suma)
}
function calcularResta(num1, num2) {
    const resta = num1 - num2;
    console.log('el resultado de la resta es: ' , resta)
}
function calcularMulti(num1, num2) {
    const multi = num1 * num2;
    console.log('el resultado de la multiplicación es: ' , multi)
}

// function calcularDivi(num1, num2) {
//     if (num2 === 0) {
//         console.log('¡¡no es posible la división entre cero!!')
//         return;
//     }
//     const divi = num1 / num2;
//     console.log('el resultado de la multiplicación es: ' , divi)
// }

function calcularDivi(num1, num2) {
    if (num2 === 0) {
        console.log('¡¡no es posible la división entre cero!!')
    } else {
        const divi = num1 / num2;
        console.log('el resultado de la división es: ' , divi)
    }
}

function calcularPot(num1, num2) {
    let potencia = num1 ** num2;
    console.log('el resultado de la potencia es: ' , potencia)
}

// console.log(' esta es la variable potencia: ', potencia)

function pedirNumero(mensaje) {
    const numero = prompt(mensaje);
    const numeroConvertido = parseInt(numero);
    return numeroConvertido;
}

function calcularOperacion(num1, num2, operacion) {
    switch (operacion) {
        case '+':
            calcularSuma(num1, num2);
            break;
        case '-':
            calcularResta(num1, num2);
            break;
        case '*':
            calcularMulti(num1, num2);
            break;
        case '/':
            calcularDivi(num1, num2);
            break;
        case 'p':
            calcularPot(num1, num2);
            break;
        default:
            console.log('la operacion ingresada no existe');    
    }
}

//-------------------------

const numero1 = pedirNumero('ingrese el primer número');
const numero2 = pedirNumero('ingrese el segundo número');
const operacion = prompt('ingrese la operación (+ - / * p)');

calcularOperacion(numero1, numero2, operacion);

*/
/*
var miOtroSaludo = 'hola otra vez';

function saludar () {
    let miSaludo = 'hola';
    // const miSaludo = 'hola';
    console.log('saludar!!');
    console.log('mi otro saludo es: ', miOtroSaludo);

    if (miSaludo) {
        let numero = 5;
        console.log('este es el miotrosaludo: ', miOtroSaludo);
    }

}
saludar ();
*/


// function saludar(nombre) {
//     console.log('nombre: ', nombre)
// }


// "Function expresion" - 
// función anónima
const saludar = function (nombre) {
    console.log('nombre: ', nombre);
}

// función flecha
const saludar1 = (nombre) => {
    console.log('nombre: ', nombre);
}

const saludar2 = (nombre) => console.log('nombre: ', nombre);

saludar('alumno brillante');
saludar1('estudiante modelo');
saludar2('y yo');
