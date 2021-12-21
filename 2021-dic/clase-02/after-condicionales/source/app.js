
/* let nombre = prompt("Ingrese un nombre");


if (nombre == "") {
    alert("No ingresaste nada");
    nombre = prompt("Ingrese un nombre");
    if (nombre == "Juan") {
        alert("Hola " + nombre);

    }
    else {
        alert("Hola no sos Juan ");
    }
} else if (nombre == "Juan") {
    alert("Hola " + nombre);
}
else {
    alert("Hola no sos Juan ");
} */

/* let numero = prompt("Ingrese un numero");
if (numero >= 100 && numero <= 200) {
    alert("El numero esta entre 100 y 200");
} else if (numero > 200 && numero < 300) {
    alert("El numero esta entre 200 y 300");
} else {
    alert("El numero esta entre 300 y 400"); 1
} */


/// Operador ternario:
// => condicion ? true : false

//let numero = prompt("Ingrese un numero del 1 al 10");

/* numero !== '' ?
    alert("El numero es " + numero) :
    alert("No ingresaste nada");
 */

/* numero ?
    alert("El numero es " + numero) :
    alert("No ingresaste nada"); */

/* let producto = Number(prompt(`Elija un producto indicando su numero:
1. Leche
2. Carne
3. Verdura
4. Fruta`));
   // parseInt(producto) 
if (producto === 1) {
    alert("El producto es Leche");
} else if (producto === 2) {
    alert("El producto es Carne");
} else if (producto === 3) {
    alert("El producto es Verdura");
} else if (producto === 4) {
    alert("El producto es Fruta");
} else {
    alert("El producto no existe, presione f5 volver a elegir");
} */


/* let numeroFlotante = parseFloat(prompt("Ingrese un número:"));
alert(`Número ingresado es ${numeroFlotante}`); */


/* let numeroFlotante = Number(prompt("Ingrese un número:"));
alert(`Número ingresado es ${numeroFlotante}`); */

let x = prompt("Ingrese un número entero: ");
let y = prompt("Ingrese un número entero mayor a 0: ");
let r = x / y;
r = r.toFixed(2);
//r = Math.round(r);
//r = Math.floor(r);
alert(r);