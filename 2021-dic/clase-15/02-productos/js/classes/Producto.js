class Producto {
    //CONSTRUCTOR DE CLASE PRODUCTO
    constructor(data) {
        this.id = data.id
        this.nombre = data.nombre.toUpperCase();
        this.precio = parseFloat(data.precio);
        this.vendido = false;
    }
    //METODO PARA SUMAR IVA
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    //METODO PARA VENDER EL PRODUCTO
    vender() {
        this.vendido = true;
    }
}

export default Producto;