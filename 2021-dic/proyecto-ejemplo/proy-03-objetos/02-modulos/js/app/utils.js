export function obtenerEntero (msg) {
    return parseInt(prompt(msg));
}

export function convertirDecimal2(num, retornarComoString = false) {
    if (retornarComoString) {
        return parseFloat(num).toFixed(2);
    }
    return +parseFloat(num).toFixed(2);
}

export function obtenerNumConPunto (msg) {
    const entradaDelUsuario = prompt(msg);
    return convertirDecimal2(entradaDelUsuario);
}

export function mostrarMsg(msg) {
    console.log(msg)
}
