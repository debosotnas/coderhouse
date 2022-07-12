class Elemento {
  constructor(props) {
      this.texto = props.texto;
      this.idPadre = props.idPadre;
      this.nombreDeClase = props.className;
      this.id = props.id;
      this.html = null;
  }
  mostrar() {
      if (this.nombreDeClase) {
          this.html.className = this.nombreDeClase;
      }
      if (this.id) {
          this.html.id = this.id;
      }
      const elementoPadre = document.querySelector(`#${this.idPadre}`);
      elementoPadre.appendChild(this.html);
  }
}

class Cabezal extends Elemento {
  constructor(props) {
      super(props);
  }
  generarHTML () {
      const h1 = document.createElement('h1');
      h1.textContent = this.texto;
      const contenedor = document.createElement('div');
      contenedor.appendChild(h1);
      this.html = contenedor;
  }
}

class Bloque extends Elemento {
  constructor(props) {
      super(props);
  }
  generarHTML() {
      const contenedor = document.createElement('div');
      contenedor.textContent = this.texto;
      this.html = contenedor;
  }
}

class Pie extends Elemento {
  constructor(props) {
      super(props);
  }
  generarHTML() {
      const contenedor = document.createElement('div');
      contenedor.textContent = this.texto;
      this.html = contenedor;
  }
}


const miCabezal = new Cabezal({
  idPadre: 'app',
  className: 'cabezal',
  texto: 'Lorem ipsum donor sit'
});
miCabezal.generarHTML();
miCabezal.mostrar();

//---------------------------

const bloqueCuerpo = new Bloque({
  idPadre: 'app',
  id: 'bloque-cuerpo'
});
bloqueCuerpo.generarHTML();
bloqueCuerpo.mostrar();

const miBloque1 = new Bloque({ idPadre: 'bloque-cuerpo', className: 'bloque-1' });
miBloque1.generarHTML();
miBloque1.mostrar();

const miBloque2 = new Bloque({ idPadre: 'bloque-cuerpo', className: 'bloque-2' });
miBloque2.generarHTML();
miBloque2.mostrar();

const miBloque3 = new Bloque({ idPadre: 'bloque-cuerpo', className: 'bloque-3' });
miBloque3.generarHTML();
miBloque3.mostrar();

const miBloque4 = new Bloque({
  idPadre: 'bloque-cuerpo',
  className: 'bloque-4',
  texto: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed metus leo, consectetur eu tempus non. Eleifend a lorem'
});
miBloque4.generarHTML();
miBloque4.mostrar();

//----------------------------

const texto = new Bloque({
  idPadre: 'app',
  className: 'bloque-texto',
  texto: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed metus leo, consectetur eu tempus non. Eleifend a lorem'
});
texto.generarHTML();
texto.mostrar();

//---------------------------

const miPie = new Pie({
  idPadre: 'app',
  className: 'pie',
  texto: 'Sed metus leo, consectetur eu tempus non'
});
miPie.generarHTML();
miPie.mostrar();