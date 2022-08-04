import { msg } from "../utils/msg";


function descargaFalsa(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.random() * 100;

            const contenidoDescargado = '[datos]';
            
            if (num > 50) {
                console.log('Descargar completa! ', contenidoDescargado);
                resolve(contenidoDescargado);
            } else {
                reject('Ha ocurrido un error!');
            }
        }, 3000);
    });
}

export function descargarDatosAsync() {
    const urlDeDescarga = 'http://www.google.com/datos';
    // const datosDescargados = descargaFalsa(urlDeDescarga);
    // console.log(datosDescargados);

    const promesaDeDescarga = descargaFalsa(urlDeDescarga);

    promesaDeDescarga.then((datos) => {
        msg('Llegaron los datos ' + datos, 6);
    }, (err1) => {
        msg(' !!! Error 1: ' + err1, 4);
        throw new Error('otro error!');
    }).catch((err) => {
        msg(' !!! Error 2: ' + err, 2);
    }).finally(() => {
        msg('Este mensaje siempre se va a mostrar (con o sin error)');
    });
}

export async function descargarDatosConAsyncAwait () {
    const urlDeDescarga = 'http://www.google.com/datos';
    msg(' Paso 1 ', 4);
    try {
        const resultadoDeDescarga = await descargaFalsa(urlDeDescarga);
        msg(' Paso 2 ', 4);
        msg(' resultado: ' + resultadoDeDescarga, 6);
    } catch(e) {
        msg(' Ocurrio un error:  ' + e, 1);
    }
}


/*
































import { msg } from "../utils/msg";

function descargaFalsa(url) {

    return new Promise((resolve, reject) => {
        // ------------------ CODIGO DE DESCARGA DE EJEMPLO
        setTimeout(() => {
            const contenidoDescargado = '[datos]';
            console.log('Descargar completa! ', contenidoDescargado);
            if (contenidoDescargado) {
                resolve(contenidoDescargado);
            } else {
                reject('Error: No se encontro info');
            }
        }, 3000);
        // ------------------
    });
    
}

export function descargarDatosAsync() {
    const urlDeDescarga = 'http://www.google.com/datos';
    descargaFalsa(urlDeDescarga).then((datosDesc) => {
        msg('Los datos fueron descargados: ' + datosDesc, 2);
    }).catch((err) => {
        console.log('>> Ha habido un error' + err);
    }).finally(() => {

    });
}*/