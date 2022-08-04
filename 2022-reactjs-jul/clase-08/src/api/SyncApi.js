
function descargaFalsa(url) {

    // ------------------ CODIGO DE DESCARGA DE EJEMPLO
    return setTimeout(() => {
        const contenidoDescargado = '[datos]';
        console.log('Descargar completa! ', contenidoDescargado);
    }, 3000);
    // ------------------
    
}

export function descargarDatosSync() {
    const urlDeDescarga = 'http://www.google.com/datos';
    const datosDescargados = descargaFalsa(urlDeDescarga);
    console.log(datosDescargados);
}