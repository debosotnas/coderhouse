/**
 * Descripción general del proyecto - Calculadora de Presupuestos 
 * ESTADO: Básico
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


// solicitud y cálculo de horas generales
const cantidadEstimadaDeHoras = prompt('Ingrese cantidad de horas de desarrollo estimada para todo el proyecto');
const cantidadEstimadaDeHorasInt = parseInt(cantidadEstimadaDeHoras);

const cantidadDeHorasDeTesting = Math.ceil(cantidadEstimadaDeHorasInt * PORCENTAJE_HORAS_TESTING);
const cantidadDeHorasDeGestion = Math.ceil(cantidadEstimadaDeHorasInt * PORCENTAJE_HORAS_GESTION_DE_PROYECTO);
const cantidadDeHorasDePublicacion = Math.ceil(cantidadEstimadaDeHorasInt * PORCENTAJE_HORAS_PUBLICACION_A_PROD);

const totalHorasDevTestingPublicacion = cantidadDeHorasDeTesting + cantidadDeHorasDePublicacion + cantidadEstimadaDeHorasInt;
const totalHorasPorProyecto = totalHorasDevTestingPublicacion + cantidadDeHorasDeGestion;
const totalDiasPorProyecto = Math.ceil(totalHorasPorProyecto / CANTIDAD_DE_HORAS_POR_DIA_DE_TRABAJO);
console.log('Total de horas de desarrollo, testing y salida a producción: ', totalHorasDevTestingPublicacion);
console.log('Total de horas de gestión de proyecto: ', cantidadDeHorasDeGestion);
console.log('Total de horas del proyecto: ', totalHorasPorProyecto);
console.log('Total de días del proyecto: ', totalDiasPorProyecto);

console.log('------------------------------------------------------------');

// solicitud de montos generales
const montoPorHoraDev = prompt('Ingrese el costo ($) por hora de DESARROLLO');
const montoPorHoraDevNum = +parseFloat(montoPorHoraDev).toFixed(2);
const montoPorHoraGest = prompt('Ingrese el costo ($) por hora de GESTIÓN DE PROYECTO');
const montoPorHoraGestNum = +parseFloat(montoPorHoraGest).toFixed(2);

// cálculo montos parciales
const costoTotalHorasDev = +parseFloat(totalHorasDevTestingPublicacion * montoPorHoraDevNum).toFixed(2);
const costoTotalHorasGestion = +parseFloat(cantidadDeHorasDeGestion * montoPorHoraGestNum).toFixed(2);

// cálculo de subtotales y totales
const subTotalProyecto = +parseFloat(costoTotalHorasDev + costoTotalHorasGestion).toFixed(2);

const montoVacacional = subTotalProyecto * PORCENTAJE_MONTO_VACACIONAL;
const montoEquipamiento = subTotalProyecto * PORCENTAJE_MONTO_GASTO_EQUIPAMIENTO;
const montoJubilatorio = subTotalProyecto * PORCENTAJE_MONTO_JUBILATORIO;

const montoPrevisional = +parseFloat(montoVacacional + montoEquipamiento + montoJubilatorio).toFixed(2);
const montoTotalSinImpuesto = +parseFloat(subTotalProyecto + montoPrevisional).toFixed(2);
const montoImpuestoTotal = +parseFloat(montoTotalSinImpuesto * PORCENTAJE_IMPUESTO).toFixed(2);
const montoTotalConImpuesto = +parseFloat(montoTotalSinImpuesto + montoImpuestoTotal).toFixed(2);

// listado de costos finales
console.log('Costo de Desarrollo: $' + parseFloat(costoTotalHorasDev).toFixed(2));
console.log('Costo de Gestión: $' + parseFloat(costoTotalHorasGestion).toFixed(2));
console.log('Costo líquido (desarrollo + gestión): $' + parseFloat(subTotalProyecto).toFixed(2));
console.log('Aportes previsionales (vacacional, jubilatorio, equipamiento): $' + parseFloat(montoPrevisional).toFixed(2));
console.log('Costo del proyecto sin impuestos: $' + parseFloat(montoTotalSinImpuesto).toFixed(2));
console.log('Impuestos : $' + parseFloat(montoImpuestoTotal).toFixed(2));
console.log('Costo final del proyecto (impuestos incluídos): $' + parseFloat(montoTotalConImpuesto).toFixed(2));
