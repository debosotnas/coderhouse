/*

// cada if evalua un valor booleano

const edad = 0 // 

// if verifica valores Booleanos

if (edad === "0") {
    // 1. convierte el numero a un valor booleano
    // 2. verifica el valor de esa conversion

}

// tengoMiedo = true
// veoUnaDeTerror = true

// !veoUnaDeTerror === !tengoMiedo

// false === !tengoMiedo

// false === false

// true

// --------------------
const tengoMiedo = true
const veoUnaDeTerror = true

if (!veoUnaDeTerror === !tengoMiedo) {
    // 1. veoUnaDeTerror (true) ---> !(true) --> false 
    // 2. tengoMiedo (true) -------> !(true) --> false
    // 3. (false) === (false)
    // 4. true
}

// 1 ------------------------- 
if (!veoUnaDeTerror === !tengoMiedo) {
    
}

// 2 ------------------------- 
if (false === false) {
    
}

// 3 ------------------------- 
if (true) {
    
}

// ===========================================================

// 1 ------------------------- 
const otraEdad = 10
if (otraEdad) { 

    if (tieneNombre) { 

    }
    
}

// 2 ------------------------- 
const otraEdad = 10   // otraEdad se convierte a Booleano
if (true) { 

}


*/

/*
const numero = 10;

// Parte 1: inicialización              -> let contador = 1
// Parte 2: verificación/validación/... -> contador <= numero 
                                         // (contador es menor o igual que numero)
// Parte 3: actualización               -> contador = contador + 1
            // contador -> 1     --------> contador = contador (1) + 1
            // contador -> 2
            // contador -> 3     -------->  (3 <= 10)
            // contador -> 4     -------->  (4 <= 10)
            // contador -> 5     -------->  (5 <= 10)
            // ...
            // contador -> 10     -------->  (10 <= 10)
            // contador -> 11     -------->  (11 <= 10) - FALSE

    for (let contador = 1; contador <= numero; contador = contador + 1) {
        console.log(contador)
    }
*/
/*
const tablaDelNumero = prompt('Ingrese el número de la tabla que quiere ver');

// contador = contador + 1  -------------->   contador++
// contador++
// contador = contador - 1  -------------->   contador--
// contador = contador + 5  -------------->   contador += 5
*/

const tablaDelNumero = prompt('Ingrese el número de la tabla que quiere ver');
for (let contador = 1; contador <= 10; contador++) {
    const multiplo = contador * tablaDelNumero

/*
    if (multiplo === 3 ) {
        console.log('es el numero tres');
    } else if (multiplo === 9 ){
        console.log('es el numero nueve');
    } else if (multiplo === 12 ){
        console.log('es el numero doce');
    } else {
        console.log('es otro numero')
    }
*/

    switch(multiplo) {
        case 3:
            console.log('es el numero tres');
            break;
        case 6:
            console.log('es el numero seis');
            break;
        case 9:
            console.log('es el numero nueve');
            break;
        default:
            console.log('es otro numero');    
        }
    

    console.log(multiplo)
}


// --------------------------------
/*
for (let repeticiones = 1; repeticiones <= 9; repeticiones++) {
    console.log("HOLA CODER --> repetición número: ", repeticiones);
    if (repeticiones === 5 ) {
        continue; // skip // saltar-ejecución
        // break;
    }
    console.log("CHAU CODER");
}
*/
// -------------------------------

// let palabra = '';
// palabra = prompt('ingresa una palabra');
// while (palabra !== 'SALIDA') {
//     palabra = prompt('ingresa una palabra');
//     console.log("HOLA CODER con WHILE --> palabra ingresada: ", palabra);
// }

// --------------------------------
// let palabra;
// do {
//     palabra = prompt('ingresa una palabra');
//     console.log("HOLA CODER con DO-WHILE --> palabra ingresada: ", palabra);
//     if (palabra === 'YO') {
//         continue;
//     }
// } while (palabra !== 'SALIDA');







