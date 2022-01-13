import { mostrarMsg } from './utils.js';
import Costo from './Costo.js';
import Tiempo from './Tiempo.js';

class App {

    constructor() {
        const tiempoDelProyecto = this.mostrarYObtenerTiempoDelProyecto();
        this.cargarMostrarCostosDelProyecto(tiempoDelProyecto);
    }

    mostrarYObtenerTiempoDelProyecto() {
        const tiempoDelProyecto = new Tiempo();
        
        // tiempoDelProyecto.cargarHorasDeDesarrollo();
        tiempoDelProyecto.cargarSeccionesyHorasDeDesarrollo();

        tiempoDelProyecto.calcularHorasDeDevTestPub();
        tiempoDelProyecto.calcularHorasDeGestion();
        tiempoDelProyecto.calcularHorasDiasDelProyecto();
        tiempoDelProyecto.mostrarHorasDiasDelProyecto();
        return tiempoDelProyecto;
    }

    cargarMostrarCostosDelProyecto(tiempoDelProyecto) {
        const costosDelProyecto = new Costo({
            horasDevTestPub: tiempoDelProyecto.horasDevTestPub,
            horasGestion: tiempoDelProyecto.horasGestion,
            seccionesDeDesarrollo: tiempoDelProyecto.seccionesDeDesarrollo
        });
        costosDelProyecto.cargarCostosPorHora();
        costosDelProyecto.calcularMontosParciales();
        costosDelProyecto.calcularCostosPorSeccion();
        costosDelProyecto.calcularTotales();
        costosDelProyecto.mostrarTotales();        
    }
}

export default App;