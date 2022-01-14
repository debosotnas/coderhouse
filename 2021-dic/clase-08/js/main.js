// Clase 08
/*
const auto = {
    marca: 'wv',
    modelo: 'fusca',
    anio: 1990,
    color: 'rojo',
    puertas: 4,
    ruedas: 4,
    motor: {
        cilindros: 3,
        potencia: '95cv',
        combustible: 'nafta'
    }
}
console.log('potencia del auto: ', auto.motor.potencia);
*/

// ----------------------
/*
const cliente = {
    nombre: 'Carlos',
    dni: 1234,
    edad: 20,
    gustos: [
        'comida',
        'cine',
        'metallica'
    ],
    direccion: 'direcccion 1234',
    telefono: 1234,
    cantidadDeBrazos: '',
    colorDePelo: '',
}
*/

/*
const documento = {
    tipoDeDocumento: 'carta',
    titulo: 'curriculum',
    subtitulo: 'subtitulo',
    cuerpo: 'este es mi CV',
    pieDePagina: 'este es el footer'
}

const DOM = {
    head: {
        ...
    },
    body: {
        ...
    }
}
*/

/*
console.log(document);
console.log(document.head);
console.log(document.body);


document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();
// --------
document.querySelector();
document.querySelectorAll();

*/

/*
const titulo = document.getElementById('titulo');
console.log('textContent: ', titulo.textContent);
console.log('innerHTML: ', titulo.innerHTML);

const misRows = document.getElementsByClassName('row')
// console.log('misRows[0]: ', misRows[0]);
// console.log('misRows[1]: ', misRows[1]);
// console.log('misRows[2]: ', misRows[2]);

const misTags = document.getElementsByTagName('li')
console.log('misTags[0]: ', misTags[0]);
console.log('misTags[1]: ', misTags[1]);
console.log('misTags[2]: ', misTags[2]);
console.log('misTags[3]: ', misTags[3]);

const misRows2 = document.getElementsByClassName('row')
for (const miRow of misRows2) {
    console.log(miRow.innerHTML);
}

*/

// const todosLosLiConClaseHola = document.querySelectorAll('.row > .row');
// const liConClaseHola = document.querySelector('li.hola');

/*

// Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");
// Insertar HTML interno
parrafo.innerHTML = "<h2 id='saludo'>¡Hola Coder!</h2>"; 
// Añadir el nodo Element como hijo de body
// document.body.appendChild(parrafo);

const cuerpoContenido = document.getElementById('contenido');
cuerpoContenido.appendChild(parrafo);

const h2Saludo = document.getElementById('saludo');
h2Saludo.parentNode.removeChild(h2Saludo);

*/

/* 
// para obtener/guardar el valor de un input, debemos obtener el elemento
const miInput = document.getElementById('nombreUsuario');
miInput.value = 'checho' // si quiero asignar
console.log(miInput.value) // si quiero leer el valor que se encuentra en este momento

*/
const miInput = document.getElementById('nombreUsuario');
console.log(miInput.value) // si quiero leer el valor que se encuentra en este momento


class Elemento {

    constructor() {
        this.nombres = [];
    }

    agregarFrase(frase) {
        this.nombres.push(frase);
    }

    agregarNombre(nombre) {
        const fraseNombre = `este es un nuevo nombre: ${nombre}`;
        this.agregarFrase(fraseNombre);
    }

    agregarNombres(arrayDeNombres) {
        this.nombres = arrayDeNombres;
    }

    agregarAlDom() {
        const elementoPadre = document.getElementById('contenido');
        for (const nombre of this.nombres) {
            //Creamos un nodo <li> y agregamos al padre en cada ciclo
            const li = document.createElement("li");
            li.innerHTML = nombre;
            elementoPadre.appendChild(li);
        }        
    }

}

// -------------------

const elemento = new Elemento();
elemento.agregarNombres(["HOMERO","MARGE", "BART", "LISA", "MAGGIE"]);
elemento.agregarFrase('hola, esta es una frase');
elemento.agregarNombre('obed');
elemento.agregarAlDom();

