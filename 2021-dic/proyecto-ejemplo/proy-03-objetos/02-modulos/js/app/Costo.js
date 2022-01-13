// De esta forma se importan varios elementos que se 
// encuentran exportados sin la palabra "default"
import { obtenerNumConPunto, convertirDecimal2, mostrarMsg } from "./utils.js";

// Como estas constantes se encuentran aquí y no son exportadas
// solo podrán usarse en este archivo.
const PORCENTAJE_MONTO_VACACIONAL = .05;
const PORCENTAJE_MONTO_GASTO_EQUIPAMIENTO = .05;
const PORCENTAJE_MONTO_JUBILATORIO = .05;
const PORCENTAJE_IMPUESTO = .21;

class Costo {
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

export default Costo;