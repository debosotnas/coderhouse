// De esta forma se importan varios elementos que se 
// encuentran exportados sin la palabra "default"
import { obtenerEntero, mostrarMsg } from "./utils.js";

// Como estas constantes se encuentran aquí y no son exportadas
// solo podrán usarse en este archivo.
const PORCENTAJE_HORAS_TESTING = .2;
const PORCENTAJE_HORAS_GESTION_DE_PROYECTO = .1;
const PORCENTAJE_HORAS_PUBLICACION_A_PROD = .1;
const CANTIDAD_DE_HORAS_POR_DIA_DE_TRABAJO = 6;

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

export default Tiempo;