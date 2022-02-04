const API_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&tagmode=any&format=json&tags=';

class Galeria {

    constructor(src) { // src = 'data/lugares.json'
        this.fuenteDeDatos = src;
    }

    cargarLugares() {
        // this.fuenteDeDatos = 'data/lugares.json'
        $.getJSON(this.fuenteDeDatos, function (response, status) {
            if (status === 'success') {
                // "response" va a guardar el objeto "ya parseado" (ya convertido 
                // de JSON a Object
                const lugares = response.lugares;
                for (const lugar of lugares) {
                    $('#lugares').append($('<option>', {
                        value: lugar.valor,
                        text: lugar.titulo
                    }));
                }
            }
        });

    }

    configurarSelector() {
        $('#lugares').on('change', function() {
            const lugar = $(this).val();

            if (lugar) { // "si lugar no es vacío"
            // if (lugar ) {  // lugar es string -> lugar = "" --> "" se convierte a valor booleano
                // "" --> false
            // if (lugar !== "") {

                const urlFotos = API_URL + lugar; 
                    // si lugar = 'uruguay'
                    // urlFotos = https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?&tagmode=any&format=json&tags=uruguay
                $.getJSON(urlFotos, (response, status) => {
                    if (status === "success") {
                        const fotos = response.items;

                        $("#fotos-disponibles > div").remove();

                        for (const foto of fotos) {
                            const fotourl = foto.media.m;

                            const titulo = foto.title || foto.author;
                            // si foto.title no es vacio, usalo. sino si foto.title es vacio, entonces usa foto.author

                            $('#fotos-disponibles').append(
                                `<div class="producto galeria-foto">
                                        <div>${titulo}</div>
                                        <img src="${fotourl}" />
                                </div>`                
                            );
                        }
                        console.log('este saludo es Asincrónico');
                
                    }
                });

                console.log('este saludo es Sincrónico');

            }

        })
    }

    manejarCambioDeOption() {
        
    }
}

const galeria = new Galeria('data/lugares2.json');
galeria.cargarLugares();
galeria.configurarSelector();
