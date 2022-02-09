class ProductoModel {
    constructor() {
      const productos = JSON.parse(localStorage.getItem('productos')) || [];
      this.productos  = productos.map(producto => new Producto(producto));
    }
    
    guardarProductos() {
      localStorage.setItem('productos', JSON.stringify(this.productos));
    }
  
    agregarProducto(producto) {
      this.productos.push(new Producto(producto));
      this.guardarProductos();
    }
}

export default ProductoModel;