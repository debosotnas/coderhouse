/*
const URLGET = "https://jsonplaceholder.typicode.com/posts"

//Agregamos un botón con jQuery
$(".buscar-post").prepend('<button id="btn1">Solicitar info con GET</button>');

//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 


    // $.get(URLGET, function (respuesta, estado) {
    $.get(URLGET, function (respuesta, estado) {
            console.log(">> estado: ", estado);
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {

              $(".buscar-post").append(`<div>
                                    <h4>${dato.id}</h4>
                                   <h3>${dato.title}</h3>
                                   <p> ${dato.body}</p>
                                  </div>`);
            }  
          }
    });


});

*/

/*

//Declaramos la url que vamos a usar para el GET
const URLGET   = "https://jsonplaceholder.typicode.com/posts"

//Declaramos la información a enviar
const infoPost =  { nombre: "Carla", profesion: "Programadora" };

//Agregamos un botón con jQuery
$(".buscar-post").prepend('<button id="btn1">Enviar datos con POST</button>');


//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
    $.post(URLGET, infoPost , (respuesta, estado) => {

        if(estado === "success"){

            $(".buscar-post").prepend(`<div>
                    Guardado:${respuesta.nombre}
                </div>`);

        }  
    });
});

*/

/*
const PATH_JSON = 'data/datos.json';

//Agregamos un botón con jQuery
$(".buscar-post").prepend('<button id="btn1">Cargar JSON</button>');

$("#btn1").click(() => { 
    $.getJSON(PATH_JSON, (respuesta, estado) => {

        if(estado === "success"){

            $(".buscar-post").prepend(`<div>
                    Nombre:${respuesta.nombre}
                    Clase:${respuesta.clase}
                    Versión:${respuesta.version}
                </div>`);

        }  
    });
});

*/


$(document).ready(function() {

    //Declaramos la url del API
    const APIURL = 'https://jsonplaceholder.typicode.com/posts' ; 


    //Declaramos la información a enviar
    const infoPost =  { nombre: "Ana", profesion: "Programadora" }


    //Agregamos un botón con jQuery
    $("body").prepend('<button id="btn1">ENVIAR API</button>');
    //Escuchamos el evento click del botón agregado
    
    
    $("#btn1").click(() => { 
        $.ajax({
            method: "POST",
            url:  APIURL,
            data: infoPost,
            success: function(respuesta){
                $("body").prepend(`<div>${respuesta.nombre}</div>`);
            }
        });
    });


});

