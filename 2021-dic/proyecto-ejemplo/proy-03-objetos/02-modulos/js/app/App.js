import { mostrarMsg } from './utils.js';
import Costo from './Costo.js';
import Tiempo from './Tiempo.js';

class App {

    constructor() {
        const tiempoDelProyecto = this.mostrarYObtenerTiempoDelProyecto();
        mostrarMsg('------------------------------------------------------------');
        this.cargarMostrarCostosDelProyecto(tiempoDelProyecto);
    }

    mostrarYObtenerTiempoDelProyecto() {
        const tiempoDelProyecto = new Tiempo();
        tiempoDelProyecto.cargarHorasDeDesarrollo();
        tiempoDelProyecto.calcularHorasDeDevTestPub();
        tiempoDelProyecto.calcularHorasDeGestion();
        tiempoDelProyecto.calcularHorasDiasDelProyecto();
        tiempoDelProyecto.mostrarHorasDiasDelProyecto();
        return tiempoDelProyecto;
    }

    cargarMostrarCostosDelProyecto(tiempoDelProyecto) {
        const costosDelProyecto = new Costo({
            horasDevTestPub: tiempoDelProyecto.horasDevTestPub,
            horasGestion: tiempoDelProyecto.horasGestion
        });
        costosDelProyecto.cargarCostosPorHora();
        costosDelProyecto.calcularMontosParciales();
        costosDelProyecto.calcularTotales();
        costosDelProyecto.mostrarTotales();        
    }
}

export default App;