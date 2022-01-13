/**
 * Descripción general del proyecto - Calculadora de Presupuestos 
 * ESTADO: Esta implementación incluye el uso de objetos y clases.
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
 * 
 * Para la implementación con Objetos/Clases, se consideraron:
 *  1. Qué objetos literales pueden ser útiles a la aplicación.
 *  2. Qué funciones se pueden crear u optimizar al usar objetos (literales o Clases)
 *  3. De qué manera los datos en la aplicación se relacionan y
 *      cómo o bajo qué classes se pueden agrupar.
 *  4. De qué manera las funciones en la aplicación se relacionan y
 *      cómo o bajo qué classes se pueden agrupar.
 *  5. Qué dependencias existen entre variables y funciones 
 *      a lo largo de la aplicación.
 * 
 * En cuanto a qué clases se pueden definir para este proyecto, 
 * a partir del listado anterior también se identificaron dos posibles 2 entidades:
 *      - La que guarda, calcula y muestra las Horas/Dias de trabajo
 *      - La que guarda, calcula y muestra los Montos/Costos de trabajo
 * 
 * NOTA IMPORTANTE:
 * ================
 *      El proceso de creación de este proyecto sigue un orden de mejoras incrementales,
 *      según los temas que nos encontramos estudiando en el curso. Por lo tanto muchas de
 *      las soluciones presentadas respetan más el orden de los temas del curso y no
 *      la arquitectura que para una aplicación de este tipo debería ser planificada (es altamente
 *      probable que en futuras etapas se deban realizar cambios las entidades actuales o cómo se
 *      realiza el proceso de carga-cálculo-mostrado de datos).
 *      En "la vida real", el programador:
 *          1. se sentaría a pensar una solución abstracta según los requisitos del programa
 *          2. definiría un borrador de entidades (y sus relaciones)
 *          3. establecería clases según las entidades definidas (así como sus miembros posibles)
 *          4. comenzaría a escribir código
 *          5. etc...
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
    if (retornarComoString) {
        return parseFloat(num).toFixed(2);
    }
    return +parseFloat(num).toFixed(2);
}

function obtenerNumConPunto (msg) {
    const entradaDelUsuario = prompt(msg);
    return convertirDecimal2(entradaDelUsuario);
}

function mostrarMsg(msg) {
    console.log(msg)
}

/******************************************************************/

class Tiempo {
    constructor() {
        this.horasDevTestPub = 0;
        this.horasGestion = 0;
        this.totalHorasDelProyecto = 0;
        this.totalDiasDelProyecto = 0;
    }

    cargarHorasDeDesarrollo() {
        const cantidadEstimadaDeHorasInt = obtenerEntero('Ingrese cantidad de horas de desarrollo estimada para todo el proyecto');
        this.cantidadEstimadaDeHorasDev = cantidadEstimadaDeHorasInt;
    }
    calcularHorasDeDevTestPub() {
        const totalHorasDevTestingPublicacion = this.obtenerHorasDevTestPub();
        this.horasDevTestPub = totalHorasDevTestingPublicacion;
    }
    calcularHorasDeGestion() {
        const cantidadDeHorasDeGestion = Math.ceil(this.cantidadEstimadaDeHorasDev * PORCENTAJE_HORAS_GESTION_DE_PROYECTO);
        this.horasGestion = cantidadDeHorasDeGestion;
    }
    calcularHorasDiasDelProyecto() {
        const totalHorasPorProyecto = this.horasDevTestPub + this.horasGestion;
        const totalDiasPorProyecto = Math.ceil(totalHorasPorProyecto / CANTIDAD_DE_HORAS_POR_DIA_DE_TRABAJO);
        this.totalHorasDelProyecto = totalHorasPorProyecto;
        this.totalDiasDelProyecto = totalDiasPorProyecto;
    }
    mostrarHorasDiasDelProyecto () {
        if(!this.horasDevTestPub) {
            mostrarMsg('Aun no se ha ingresado información sobre horas de desarrollo, por favor verifique');
            return;
        }
        mostrarMsg('Total de horas de desarrollo, testing y salida a producción: ' + this.horasDevTestPub);
        mostrarMsg('Total de horas de gestión de proyecto: ' + this.horasGestion);
        mostrarMsg('Total de horas del proyecto: ' + this.totalHorasDelProyecto);
        mostrarMsg('Total de días del proyecto: ' + this.totalDiasDelProyecto);
    }

    // (Definido en etapa previa)
    obtenerHorasDevTestPub() {
        const cantidadDeHorasDeTesting = Math.ceil(this.cantidadEstimadaDeHorasDev * PORCENTAJE_HORAS_TESTING);
        const cantidadDeHorasDePublicacion = Math.ceil(this.cantidadEstimadaDeHorasDev * PORCENTAJE_HORAS_PUBLICACION_A_PROD);
        return cantidadDeHorasDeTesting + cantidadDeHorasDePublicacion + this.cantidadEstimadaDeHorasDev;
    }
}

class Costos {
    constructor(props) {
        this.horasDevTestPub = props.horasDevTestPub;
        this.horasGestion = props.horasGestion;

        this.precioHoraDev = 0;
        this.precioHoraGestion = 0;
        this.costoTotalDev = 0;
        this.costoTotalGestion = 0;
        this.subTotalProyecto = 0;

        this.montoPrevisional = 0;
        this.montoTotalSinImpuesto = 0;
        this.montoImpuestos = 0;
        this.montoTotal = 0;
    }

    cargarCostosPorHora() {
        this.precioHoraDev = obtenerNumConPunto('Ingrese el costo ($) por hora de DESARROLLO');
        this.precioHoraGestion = obtenerNumConPunto('Ingrese el costo ($) por hora de GESTIÓN DE PROYECTO');
    }

    calcularMontosParciales() {
        this.costoTotalDev = convertirDecimal2(this.horasDevTestPub * this.precioHoraDev);
        this.costoTotalGestion = convertirDecimal2(this.horasGestion * this.precioHoraGestion);
    }

    calcularTotales() {
        this.subTotalProyecto = convertirDecimal2(this.costoTotalDev + this.costoTotalGestion);

        const montoVacacional = this.subTotalProyecto * PORCENTAJE_MONTO_VACACIONAL;
        const montoEquipamiento = this.subTotalProyecto * PORCENTAJE_MONTO_GASTO_EQUIPAMIENTO;
        const montoJubilatorio = this.subTotalProyecto * PORCENTAJE_MONTO_JUBILATORIO;
        
        this.montoPrevisional = convertirDecimal2(montoVacacional + montoEquipamiento + montoJubilatorio);
        this.montoTotalSinImpuesto = convertirDecimal2(this.subTotalProyecto + this.montoPrevisional);
        this.montoImpuestos = convertirDecimal2(this.montoTotalSinImpuesto * PORCENTAJE_IMPUESTO);
        this.montoTotal = convertirDecimal2(this.montoTotalSinImpuesto + this.montoImpuestos);
    }

    mostrarParciales() {
        mostrarMsg('Costo de Desarrollo: $' + convertirDecimal2(this.costoTotalDev, true));
        mostrarMsg('Costo de Gestión: $' + convertirDecimal2(this.costoTotalGestion, true));
        mostrarMsg('Aportes previsionales (vacacional, jubilatorio, equipamiento): $' + convertirDecimal2(this.montoPrevisional, true));
    }

    mostrarDetalleLiquidoEImpuestos() {
        mostrarMsg('Costo líquido (desarrollo + gestión): $' + convertirDecimal2(this.subTotalProyecto, true));
        mostrarMsg('Costo del proyecto sin impuestos: $' + convertirDecimal2(this.montoTotalSinImpuesto, true));
        mostrarMsg('Impuestos : $' + convertirDecimal2(this.montoImpuestos, true));
    }

    mostrarCostoTotal() {
        mostrarMsg('Costo final del proyecto (impuestos incluídos): $' + convertirDecimal2(this.montoTotal, true));
    }

    mostrarTotales() {
        if (!this.horasDevTestPub || !this.horasGestion) {
            mostrarMsg('Aun no se ha ingresado la información sobre horas de desarrollo o gestión, por favor verifique');
            return;
        } else if (!this.subTotalProyecto) {
            mostrarMsg('Aun no se ha calculado la información de costos, por favor verifique');
            return;
        }
        this.mostrarParciales();
        this.mostrarDetalleLiquidoEImpuestos();
        this.mostrarCostoTotal();
    }

}

// Ejecución de la App
const tiempoDelProyecto = new Tiempo();
tiempoDelProyecto.cargarHorasDeDesarrollo();
tiempoDelProyecto.calcularHorasDeDevTestPub();
tiempoDelProyecto.calcularHorasDeGestion();
tiempoDelProyecto.calcularHorasDiasDelProyecto();
tiempoDelProyecto.mostrarHorasDiasDelProyecto();

mostrarMsg('------------------------------------------------------------');

const costosDelProyecto = new Costos({
    horasDevTestPub: tiempoDelProyecto.horasDevTestPub,
    horasGestion: tiempoDelProyecto.horasGestion
});
costosDelProyecto.cargarCostosPorHora();
costosDelProyecto.calcularMontosParciales();
costosDelProyecto.calcularTotales();
costosDelProyecto.mostrarTotales();
