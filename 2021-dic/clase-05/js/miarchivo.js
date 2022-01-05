// Clase 5 - Objetos
// - Literal
// - Función Constructora
// - Class 


/*
// clave / valor
const homero1 = {
    nombre: 'Homero',
    colorDePiel: 'amarillo',
    rotacion: 45,
    objeto: 1,
    edad: 70,
    logueado: true
};

// Clave propiedad / Valor 

// const edad = 70;
// const nombre = 'Obed'
// const tieneHambre = false

console.log('la edad es: ', homero1.edad)
console.log('el nombre es: ', homero1.nombre)
console.log('el color de piel es: ', homero1.colorDePiel)

homero1.edad = 50;
homero1.colorDePiel = 'asdf'
homero1.rotacion = 2323
// homero1.tieneHambre = true
// console.log('tiene hambre: ', homero1.tieneHambre)
// delete homero1.tieneHambre;
// console.log('tiene hambre (2da vez): ', homero1.tieneHambre)

// console.log(homero1)

console.log(homero1)



// PRIMERA MANERA DE LLAMAR A UN REGISTRO
/*
function registrarUsuario(nombre, apellido, clave, correo, edad) {
    // aqui va la magia
}
registrarUsuario(nombre, apellido, clave, correo, edad)
* /
// SEGUNDA MANERA DE LLAMAR A UN REGISTRO
function registrarUsuario(datosDelUsuario) {
    // aqui va la magia
    datosDelUsuario.nombre
    datosDelUsuario.apellido
    datosDelUsuario.correo
    // aqui sigue la magia
    // ...
}


const usuario = { 
    apellido: 'santos', 
    nombre: 'obed', 
    edad: '15',
    clave: 'miclavesupersegura', 
    correo: 'yo@yo.com', 
}
registrarUsuario(usuario);


/*
// -------------------------------------------------
// funcion constructora
function Homero(id, color, rotacion, edad) {
    this.id = id;
    this.colorDePiel = color;
    this.rotacion = rotacion;
    this.edad = edad;
}

const homero2 = new Homero(1, 'amarillo', 30, 18);
const homero3 = new Homero(2, 'blanco', 20, 90);
const homero4 = new Homero(3, 'negro', 80, 40);

// 'new' - 'this'

*/
/*
const nombre = prompt('ingrese nombre'); 

// nombre es del tipo string

if (nombre.toLowerCase() === 'eva') {
    console.log('hola eva')
}
*/


// functions ---> para "llamarlas" (ejecutarlas) debemos usar "(" y ")"
//      funciones que pertenecen a un objeto -> métodos
// 


/*
const persona = {
    edad: '41',
    altura: '190',
    peso: '80',
    esMayorDe18: () => {
        console.log('es mayor de 18')
    }
}
*/

/*
function Persona(nombre, edad, altura, peso) {

    this.edad = edad;
    this.altura = altura;
    this.peso = peso;
    this.nombre = nombre;

    this.esMayorDe18 = function () {
        if (this.edad >= 18) {
            console.log('es mayor (o igual) de 18');
        } else {
            console.log('es MENOR de 18');
        }
    }

    this.saludar = () => {
        console.log('Hola, mi nombre es ', this.nombre);
    }

}

const miPersona1 = new Persona('checho', 14, 145, 60);
*/


// Class
class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    esMayorDe18 () {
        if (this.edad >= 18) {
            console.log('es mayor (o igual) de 18');
        } else {
            console.log('es MENOR de 18');
        }
    }    

    saludar () {
        console.log('Hola, mi nombre es ', this.nombre);
    }

}

// la linea siguiente, crea una "instancia" de Persona
const miOtraPersona = new Persona('checho', 14);

/********************************


// class Animal {
//     constructor(tipo, edad) {
//         this.tipo = tipo;
//         this.edad = edad;
//     }
// }

// class Ballena extends Animal {

// }
// class Orangutan extends Animal {

// }
// class Mono  extends Animal {

// }



*/