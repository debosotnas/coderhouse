// declaro las variables 
let arancel,i, sellado ,precioFirmas,precioCedulas, totalTransferencia , nuevoUsuario,nuevaTrasnferencia, recuperarBase,baseParse;
let nombre = document.getElementById("nombre");
let marca = document.getElementById("marca");
let modelo = document.getElementById("modelo");
let anio = document.getElementById("anio");
let precio = document.getElementById("precio");
let firmas = document.getElementById("firmas");
let cedulas = document.getElementById("cedulas");
let total = document.getElementById("total");
let parrafo = document.createElement("p");

// constructor de Usuarios para crear una base de datos con los datos del vehiculo
        class Usuario {
          constructor ( usuario, marca , modelo){
            this.nombre = usuario.toUpperCase();
            this.marca = marca.toUpperCase();
            this.modelo = modelo.toUpperCase(); 
            }
            // funcion que crea base de datos en localstorage
            crearBase(usuario){
              localStorage.setItem("Base De Datos", JSON.stringify(usuario));
            }
            // recuperamos los datos para mostrarlos despues en el resultado total 
            traerDatosLocal(){
              recuperarBase = localStorage.getItem("Base De Datos");
              // RECUPERAR BASE POR PARSE 
              baseParse = JSON.parse(recuperarBase);
              return baseParse;
            }
            }


            // constructor para hacer los calculos de los costos de una transferencia 

        class CostoTransferencia {
            constructor (modeloAno, precioVehiculo , firmas , cedulas) {
                this.modeloAno = parseFloat(modeloAno);
                this.precioAuto = parseFloat(precioVehiculo);
                this.cantidadFirmas = parseFloat(firmas);
                this.cantidadCedulas = parseFloat(cedulas);
            }
            // funcion del calculo del sellado(impuesto)
            calcularSellado(){
                sellado = (this.precioAuto * 3) /100;
                if (this.modeloAno >= 1990){ 
                return sellado }
                else {
                  return 0
                }
            }
            // calculo del arancel // arancel minimo 
            calcularArancel(){
              arancel = (this.precioAuto * 2.5) /100;
              let arancelMinimo = 2500
              if (arancel > arancelMinimo){
                return arancel
              } return arancelMinimo
            }
            // calculo de firmas 
            calcularFirmas(){
                precioFirmas = this.cantidadFirmas * 560;
            }
            // calculo de cedulas 
            calcularCedulas(){
                precioCedulas = this.cantidadCedulas * 760;
            }
            //calculo del costo total 
            calcularTotal(){
                totalTransferencia = this.calcularSellado() + precioFirmas + precioCedulas + this.calcularArancel();
                return totalTransferencia
            }
            // muesta del resultado total en un P 
            mostrarCosto(base){
              parrafo.className = `parrafoVerde fw-bold`
              parrafo.innerHTML = `${base.nombre} el valor estimado para la transferencia de tu vehiculo marca : ${base.marca} modelo : ${base.modelo} año : ${this.modeloAno} es de $ ${totalTransferencia}.`
              total.appendChild(parrafo)}
      }
// añadimos los eventos a los botones  
let boton = document.getElementById("boton")
boton.addEventListener("click",calculador)

let botonLimpiar = document.getElementById("botonLimpiar");
botonLimpiar.addEventListener("click", limpiar)

// establecemos la funcion que se ejecutara en el boton Calcular Costo

function calculador (){
        nuevaTrasnferencia = new CostoTransferencia (anio.value , precio.value , firmas.value , cedulas.value );
        nuevoUsuario = new Usuario (nombre.value , marca.value, modelo.value);
        if ((nombre.value != "") && (modelo.value != "") && (anio.value !="") && (precio.value != "")) {
        nuevoUsuario.crearBase(nuevoUsuario);
        nuevaTrasnferencia.calcularSellado();
        nuevaTrasnferencia.calcularArancel();  
        nuevaTrasnferencia.calcularFirmas();
        nuevaTrasnferencia.calcularCedulas();
        nuevaTrasnferencia.calcularTotal();
        nuevoUsuario.traerDatosLocal(); 
        nuevaTrasnferencia.mostrarCosto(baseParse);}
        else {
          parrafo.className = "parrafoRojo fw-bold"
          parrafo.innerHTML = `debe completar todos los casilleros `
          total.appendChild(parrafo);
        }
}
// establecemos la funcion que se ejecutara en el boton Limpiar formulario, el cual limpia el formulario y hace desaparecer el elemento P por sus class y su contenido innerHTML
function limpiar(){
  parrafo.className = ""
  parrafo.innerHTML = ``
}

