/*
let alumnos = '';
for (let index = 0; index < 3; index++) {
    alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
}
alert(alumnos);

*/
// += ¿¿¿???

// alumnos = alumnos + 1  ----------> alumnos +=
// 

//////----------------------

// alumnos++  ----------------> alumnos = alumnos + 1
// alumnos+= 20  ----------------> alumnos = alumnos + 20

// alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";

// alumnos = alumnos + prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";



// const nombre = prompt("INGRESAR NOMBRE DE ALUMNO");
// alumnos = alumnos + nombre + "\n";

// hacer un promedio de 5 numeros
/*
let promedio = 0;
for (let num = 1; num <= 5; num++) {
    promedio += prompt('ingrese un numero')
    
}
*/
//-----------------
/*
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let promedio = 0;

num1 = prompt('ingrese numero - 1')
num2 = prompt('ingrese numero - 2')
num3 = prompt('ingrese numero - 3')
num4 = prompt('ingrese numero - 4')
num5 = parseInt(prompt('ingrese numero - 5'))

promedio = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + num5) / 5

alert ('el promedio es: ' + promedio)
*/

///////////////////////////////////////////////////

/*

let promedio;
let suma = 0;
let numero;

numero = parseInt(prompt('ingrese cantidad de examenes del alumno'));

for (let num = 1; num <= numero; num++) {
    suma += parseFloat(prompt('ingrese la nota para el examen numero ' + num));
}
promedio = suma / numero;

alert('el promedio del alumno es ' + promedio);

*/

    // suma = 0 + parseFloat(prompt('ingrese numero'))
    // promedio += prompt('ingrese un numero')



















// Ejer 1
// Solicitar un número al usuario, y mostrar un mensaje 
// repitiéndolo según el número ingresado por el usuario.
// Pero si se alcanza un número de iteraciones mayor que 
// cuatro, cancelar el ciclo.






























// Ejer 2
// Solicitar al usuario la carga de cinco (5) alumnos 
// de forma consecutiva. Luego realizar un única salida
// por alerta, con el listado de alumnos registrados.




































// Ejer 3
// Solicitar al usuario la carga de nombres de forma 
// consecutiva,  hasta que se ingrese “Voldemort”.
// Luego realizar un única salida por alerta, 
// con todos los nombres ingresados.






































// Ejer 4
// Solicitar al usuario un (1) 
    // número de forma consecutiva, 
    // hasta que se ingrese “ESC”. 
// Generar una única salida 
// compuesta por los siguientes productos, según el valor 
// ingresado en cada ciclo:
// (switch)
// “Tomate” si es 1.
// “Papa” si es 2.
// “Carne” si es 3.
// “Pollo” si es 4.

const Tomate = '1';
const Papa = '2';
const Carne = '3';
const Pollo = '4';

let entrada;

do {
    entrada = prompt('ingrese un ingrediente para la cena')
    switch (entrada) {
        case Tomate:
            console.log('el ingrediente es Tomate');
            break;
        case Papa:
            console.log('el ingrediente es Papa');
            break;
        case Carne:
            console.log('el ingrediente es Carne');
            break;
        case Pollo:
            console.log('el ingrediente es Pollo');
            break;
        default:
            console.log('no ingreso un ingrediente correcto')
    }
} while (entrada !== 'ESC');

// // ---------------

// const ErrorAlNoTenerUnaTarjetaValida = 400
// do {
//     resultadoDeLaCompra = comprarAtravesDeUnApiConPlataReal()
//     switch (resultadoDeLaCompra) {
//         case ErrorAlNoTenerUnaTarjetaValida:
//             console.log('el ingrediente es Tomate')
//         case 1250:
//             console.log('el ingrediente es Tomate')
            
    
//     }    
// } while (entrada !== 'ESC');





