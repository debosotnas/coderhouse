/*
 Temario del ejercicio:
  - ...
  - ... 
*/

class Elemento {
  constructor(props) {
    this.texto = props.texto;
    this.idPadre = props.idPadre;
    this.nombreDeClaseCSS = props.nombreDeClaseCSS;
    this.miElemento = null;
  }
  mostrar () {
    const padre = document.querySelector(`#${this.idPadre}`);
    padre.appendChild(this.miElemento);
  }
}

class Cabezal extends Elemento {
  constructor(props) {
    super(props);
  }

  mostrarCabezal() {
    this.miElemento = document.createElement('header');
    this.miElemento.textContent = this.texto;
    this.miElemento.className = this.nombreDeClaseCSS;

    this.mostrar(); // aqui llama al "mostrar" 
    // que esta en el "padre" ("Elemento")
  }

}

class Contenido extends Elemento{
  constructor(props) {
    super(props);
    this.tarjetas = props.tarjetas;
  }

  mostrarContenido() { // render
    this.miElemento = document.createElement('div');
    if (this.texto) {
      this.miElemento.textContent = this.texto;
    }
    if (this.nombreDeClaseCSS) {
      this.miElemento.className = this.nombreDeClaseCSS;
    }
    if (this.tarjetas && this.tarjetas.length > 0) {
      const htmlTarjetas = this.tarjetas.reduce((prev, curr) => {
        return prev + curr;
      }, '');

      this.miElemento.innerHTML = htmlTarjetas;
    }
    this.mostrar(); // aqui llama al "mostrar" 
    // que esta en el "padre" ("Elemento")
  }

}

class Tarjeta extends Elemento {
  constructor(props) {
    super(props);
  }

  obtenerTarjeta () {
    this.miElemento = document.createElement('div');
    if (this.texto) {
      this.miElemento.textContent = this.texto;
    }
    if (this.nombreDeClaseCSS) {
      this.miElemento.className = this.nombreDeClaseCSS;
    }
    return this.miElemento.outerHTML;
  }
}

const cabezal = new Cabezal({
  texto: 'Lorem ipsum donor sit',
  idPadre: 'app',
  nombreDeClaseCSS: 'cabezal'
});
cabezal.mostrarCabezal();

const tarjeta1 = new Tarjeta({
  nombreDeClaseCSS: 'bloque-1'
})
const tarjeta2 = new Tarjeta({
  nombreDeClaseCSS: 'bloque-2'
})
const tarjeta3 = new Tarjeta({
  nombreDeClaseCSS: 'bloque-3'
})
const tarjeta4 = new Tarjeta({
  nombreDeClaseCSS: 'bloque-4',
  texto: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed metus leo, consectetur eu tempus non. Eleifend a lorem'
})

tarjeta1.obtenerTarjeta();

const contenido = new Contenido({
  texto: 'Lorem ipsum donor sit',
  idPadre: 'app',
  tarjetas: [
    tarjeta1.obtenerTarjeta(),
    tarjeta2.obtenerTarjeta(),
    tarjeta3.obtenerTarjeta(),
    tarjeta4.obtenerTarjeta(),
  ]
});
contenido.mostrarContenido();

const footer = new Contenido ({
  texto: 'Tempus non luctus et ultrices Vestibulum ante ipsum primis.',
  nombreDeClaseCSS: 'pie',
  idPadre: 'app'
});
footer.mostrarContenido();