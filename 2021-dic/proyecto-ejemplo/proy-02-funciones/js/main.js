/**
 * Descripción general del proyecto - Calculadora de Presupuestos 
 * ESTADO: Esta implementación incluye el uso de funciones.
 * 
 * Permitirá al usuario ingresar tres datos:
 *    - cantidad de horas de desarrollo estimada para todo el proyecto
 *    - valor ($) de la hora de desarrollo
 *    - valor ($) de la hora de gestión del proyecto
 * A partir de esto y según ciertos parámetros definidos se mostrará en pantalla:
 *    - Tiempos:
 *      - Horas totales de desarrollo, testing y gestión del proyecto
 *      - Cantidad de días del proyecto
 *    - Costos:
 *      - Costo de desarrollo y gestión
 *      - Impuestos y otros aportes
 *      - Costo final del proyecto
 */

// constantes de la aplicacion
const PORCENTAJE_HORAS_TESTING = .2;
const PORCENTAJE_HORAS_GESTION_DE_PROYECTO = .1;
const PORCENTAJE_HORAS_PUBLICACION_A_PROD = .1;
const CANTIDAD_DE_HORAS_POR_DIA_DE_TRABAJO = 6;

const PORCENTAJE_MONTO_VACACIONAL = .05;
const PORCENTAJE_MONTO_GASTO_EQUIPAMIENTO = .05;
const PORCENTAJE_MONTO_JUBILATORIO = .05;

const PORCENTAJE_IMPUESTO = .21;

/******************* DEFINICIÓN DE FUNCIONES DE LA APP ************/

function obtenerEntero (msg) {
    return parseInt(prompt(msg));
}

function convertirDecimal2(num, retornarComoString = false) {
    // 'retornarComoString' es un parámetro opcional (valor por defecto 'false')

    if (retornarComoString) {
        return parseFloat(num).toFixed(2);
    }
    return +parseFloat(num).toFixed(2);
}

function obtenerNumConPunto (msg) {
    const entradaDelUsuario = prompt(msg);
    return convertirDecimal2(entradaDelUsuario);
}

function obtenerHorasDevTestPub(cantidadEstimadaDeHorasInt) {
    const cantidadDeHorasDeTesting = Math.ceil(cantidadEstimadaDeHorasInt * PORCENTAJE_HORAS_TESTING);
    const cantidadDeHorasDePublicacion = Math.ceil(cantidadEstimadaDeHorasInt * PORCENTAJE_HORAS_PUBLICACION_A_PROD);
    return cantidadDeHorasDeTesting + cantidadDeHorasDePublicacion + cantidadEstimadaDeHorasInt;
}

function mostrarMsg(msg) {
    console.log(msg)
}
/******************************************************************/

// solicitud y cálculo de horas generales
const cantidadEstimadaDeHorasInt = obtenerEntero('Ingrese cantidad de horas de desarrollo estimada para todo el proyecto');
const totalHorasDevTestingPublicacion = obtenerHorasDevTestPub(cantidadEstimadaDeHorasInt);

const cantidadDeHorasDeGestion = Math.ceil(cantidadEstimadaDeHorasInt * PORCENTAJE_HORAS_GESTION_DE_PROYECTO);

const totalHorasPorProyecto = totalHorasDevTestingPublicacion + cantidadDeHorasDeGestion;
const totalDiasPorProyecto = Math.ceil(totalHorasPorProyecto / CANTIDAD_DE_HORAS_POR_DIA_DE_TRABAJO);
mostrarMsg('Total de horas de desarrollo, testing y salida a producción: ' + totalHorasDevTestingPublicacion);
mostrarMsg('Total de horas de gestión de proyecto: ' + cantidadDeHorasDeGestion);
mostrarMsg('Total de horas del proyecto: ' + totalHorasPorProyecto);
mostrarMsg('Total de días del proyecto: ' + totalDiasPorProyecto);

mostrarMsg('------------------------------------------------------------');

// solicitud de montos generales
const montoPorHoraDevNum = obtenerNumConPunto('Ingrese el costo ($) por hora de DESARROLLO');
const montoPorHoraGestNum = obtenerNumConPunto('Ingrese el costo ($) por hora de GESTIÓN DE PROYECTO');

// cálculo montos parciales
const costoTotalHorasDev = convertirDecimal2(totalHorasDevTestingPublicacion * montoPorHoraDevNum);
const costoTotalHorasGestion = convertirDecimal2(cantidadDeHorasDeGestion * montoPorHoraGestNum);

// cálculo de subtotales y totales
const subTotalProyecto = convertirDecimal2(costoTotalHorasDev + costoTotalHorasGestion);

const montoVacacional = subTotalProyecto * PORCENTAJE_MONTO_VACACIONAL;
const montoEquipamiento = subTotalProyecto * PORCENTAJE_MONTO_GASTO_EQUIPAMIENTO;
const montoJubilatorio = subTotalProyecto * PORCENTAJE_MONTO_JUBILATORIO;

const montoPrevisional = convertirDecimal2(montoVacacional + montoEquipamiento + montoJubilatorio);
const montoTotalSinImpuesto = convertirDecimal2(subTotalProyecto + montoPrevisional);
const montoImpuestoTotal = convertirDecimal2(montoTotalSinImpuesto * PORCENTAJE_IMPUESTO);
const montoTotalConImpuesto = convertirDecimal2(montoTotalSinImpuesto + montoImpuestoTotal);

// listado de costos finales
mostrarMsg('Costo de Desarrollo: $' + convertirDecimal2(costoTotalHorasDev, true));
mostrarMsg('Costo de Gestión: $' + convertirDecimal2(costoTotalHorasGestion, true));
mostrarMsg('Costo líquido (desarrollo + gestión): $' + convertirDecimal2(subTotalProyecto, true));
mostrarMsg('Aportes previsionales (vacacional, jubilatorio, equipamiento): $' + convertirDecimal2(montoPrevisional, true));
mostrarMsg('Costo del proyecto sin impuestos: $' + convertirDecimal2(montoTotalSinImpuesto, true));
mostrarMsg('Impuestos : $' + convertirDecimal2(montoImpuestoTotal, true));
mostrarMsg('Costo final del proyecto (impuestos incluídos): $' + convertirDecimal2(montoTotalConImpuesto, true));
