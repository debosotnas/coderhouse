/* let variable1 = "eimy";
console.log(variable1);
const variable2 = "blanco"

variable1= "juan"
console.log(variable1 + variable2);
variable1= "ale"
console.log(`Hola soy ${variable1} mi apellido es ${variable2}
ahsodajosdjas
ajsdaisda`)  */
//

//Convertir strings a number
//parseInt()
//Number()
// +variable

/* variable1= variable1.toLowerCase();
console.log(variable1)

variable1= variable1.toUpperCase();
console.log(variable1) */

//Operadores
//&& = TRUE solo si TODOS son true
// OR || = TRUE si uno es TRUE
//NOT = !variable
// == y ===
/*  2 == "2" -> TRUE
 2 === "2" - > FALSE */

// Control de Flujo
 //IF
 
/*  let edad = prompt("edad");
 edad = +edad

 if (edad == "3") {
    alert("tu edad es el numero de gatos que debes tener")
 }else if (edad < 3) {
    alert("Eres muy joven para tener un gato")
 } else {
     edad = edad/5
     alert(`Deberias tener tanto como ${edad} en gatos`)
 } */

 // SWITCH 
/* let clima = prompt(`Como esta el clima, ingrese el numero correspondiente:
                    1. soleado
                    2. nublado
                    3. no sabemos`)

 switch(clima){
    case "1":
         console.log("Es un lindo dia para salir");
         break;
    case "2":
        console.log("Lleva paraguas");
        break;
    default:
        console.log("No sabemos como esta el clima");
        break;
 } */

//CICLOS FOR WHILE y DO WHILE

//for(donde comienza, condicion, la accion)
/*  for( let i=1; i <=5; i++) {
     console.log("hola")
 }

 //while y el do while
 let i =6; 
 while(i <=5) {
     console.log("chao");
     i++
 }

 let nombre;
 do {
   nombre= prompt("Cual su nombre")
 }while(nombre !== "eimy")

 */

 //funciones

// HOISTING

/* 
function saludar(numero1, numero2) {
    let suma = numero1 + numero2
    return suma
}
console.log(saludar(numero1, numero2))

let numero1 = 2
let numero2 = 1


 */


//Funciones flecha
/* const saludo = (nombre) => {return console.log("Hola")}

 */



/*1) REGISTRO.
  Vamos a construir un programa que permita al usuario registrarse en nuestra aplicacion. Para ello, en primer lugar vamos a
  mostrar un mensaje que le de la bienvenida al usuario y le pregunte si desea registrarse.
  En caso de que el usuario acepte registrarse, le vamos a pedir que ingrese su nombre de usuario en primer lugar. El nombre de usuario
  tiene que tener por lo menos 3 caracteres y no va a ser case sensitive, por lo que lo vamos a almacenar en minusculas, independientemente
  de como lo ingrese el usuario. Agregar la validacion necesaria para que en caso de que el usuario no cumpla con las concidiones, 
  se muestre un mensaje de error.
  Si el nombre de usuario es ingresado correctamente, le vamos a pedir al usuario que ingrese una contrasena, la que tiene que tener
  por lo menos 6 caracteres. La contrasena tiene que ser case sensitive, por lo que se respetan las mayusculas y minusculas segun lo ingrese
  el usuario.
  En caso de que la contrasena no cumpla con el requisito anterior, se debe mostrar un mensaje de error. De lo contrario, se debe mostrar un
  mensaje de exito informando al usuario que se completo el registro.
*/

let seQuiereRegistrar, nombreDeUsuario, contrasenia;

seQuiereRegistrar = confirm("Te quieres registrar?")

do {
if(seQuiereRegistrar) {
    let nombreDeUsuario = prompt("Ingrese un nombre de usuario con mas de 3 caracteres")
    if(nombreDeUsuario.length >= 3) {
        nombreDeUsuario = nombreDeUsuario.toLocaleLowerCase()
        let contrasenia = prompt("Ingrese una contraseña")
        if(contrasenia.length >= 6){
            alert("RegistroExistoso")
        } else {
            alert("La contraseña debe tener al menos 6 caracteres")
        }
    } else {
        alert("Usuario incorrecto, debe tener al menos 3 caracteres")
    }
}else {
    alert("Muchas gracias por entrar a nuestra pagina!")
}
}while(nombreDeUsuario.length < 3 || contrasenia.length < 6 )