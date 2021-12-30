// Clase 02 
//      Tipos de variables (Number / String / ...)
//          Intro a estructuras de Control I
//      Estructuras de control II   - If / If-Else / If-Else-If
//      Estructuras de control III  - Operadores lógicos
//      Estructuras de Control IV   - Complejidad y organización


// booleanas
// -> toda variable booleana --> toma 2 valores:
// -    verdadero ---> true
// -    falso       -> false

////////////////////////////////////////////

// - String -> texto
// - Number -> numeros
// - Booleans -> true / false
/*
// let edad = 5.3 // Number
let nombre = "obed" // String
let estaSaltando = false // Boolean

// let / const --> pertenecen a un BLOQUE (variables de Bloque)

if (estaSaltando) { 
    // If es SI en inglés 
    // Evaluar Si lo que está dentro 
    // del paréntesis es true (VERDADERO) --->

    // 1. Cambiar el dibujo de Mario
    // 2. Moverlo "hacia arriba"
    // 3. ... Reproducir sonido de salto
    // 4. ...
    // 5. ...
    alert('Sí está saltando!')
    
} else { // sino

    console.log('No está saltando')
    
}

// -----------------------------------

// SINTáctica --> Sintaxis / Cómo se escribe
// Semántica  --> / Lo que significa

// crear un script que me diga si es mayor de edad -- mayores de 18
// > mayor que...
// < menor que...
// 
// 18 - más de 18 - menos de 18
/*
const edad = 18
const otraEdad = "18"
const tieneHijos = true

const esMayorDe18 = edad > 18 // true / false

//
// ==  -> compara solo valor
// === -> compara valor pero tambien tipo
//


// coerción implícita --> ==

if (otraEdad === 18) { // === // si EDAD es mayor que el numero 18

    alert('la persona tiene más de 18 años')

    if (tieneHijos) {
        alert ('tienes hijos!')
    }

} else if (edad < 18) { // sino si edad es menor de 18

    alert('la persona tiene menos de 18 años')

} else {

    alert('la persona tiene 18 años')

} 
*/

//-------------------------------
// && --> "y"
// > <      >=    <= ------>
// !==
// || ---> "O" (or)
// !  ---> negacion / NO

const marioEstaAgachado = true
const marioEstaEncimaDeUnTuboVerde = true
const elTuboVerdeLlevaAOtroMundo = true
const altura = 100
const anchura = 200

/*
if (marioEstaAgachado) {
    if (marioEstaEncimaDeUnTuboVerde) {
        if (elTuboVerdeLlevaAOtroMundo) {
            // llevar a otro mundo
            // 
        }
    }
}
*/

if (altura !== anchura) {
    // esto se ejecuta solo si 'altura' es distinto de 'anchura'
}

if (!marioEstaAgachado) {

}

// if (marioEstaAgachado && marioEstaEncimaDeUnTuboVerde && elTuboVerdeLlevaAOtroMundo) {

// }

/*
if((nombreIngresado !== "") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))) {

}
*/
//----------------
const nombreIngresado = '';
const nombreNoEstaVacio = nombreIngresado !== ""; // nombreNoEstaVacio -> false
// nombreNoEstaVacio ---> false
const esEma = nombreIngresado === "EMA";
const esEmaMinuscula = nombreIngresado === "ema";

// ... -------->
if(nombreNoEstaVacio && (esEma || esEmaMinuscula)) {

}
//...

/* ---------------- */
// 1. pregunta si el nombre ingresado NO es vacío [Y] si                ( el nombre es EMA [O] ema)
// 2. (pregunta si el nombre ingresado NO es vacío [Y] si nombre es EMA)        [O]     nombre es ema

// nombreIngresado = ema
/*
if(  (nombreIngresado !=="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
if( ((nombreIngresado !=="") &&  (nombreIngresado == "EMA")) || (nombreIngresado =="ema")){

    // !== // diferente distinto no-es-igual

    if (nombreIngresado !== "") { // "" --> vacío

    }
*/

/* ---------------- */

// la verificacion de condicionales en Javascript son de 'circuito corto'

let edad = prompt('Ingresa tu edad')

if ( /* comparar algo */0 ) {

}


