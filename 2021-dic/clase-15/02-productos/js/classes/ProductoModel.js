import Producto from "./Producto.js";

class ProductoModel {
  //CONSTRUCTOR DEL MODELO PRODUCTO
  constructor() {
      //OBTENEMOS EL ARRAY DE PRODUCTOS PARSEANDO DESDE EL JSON SI EXISTE
      const productos = JSON.parse(localStorage.getItem('productos')) || [];
      //USAMOS MAP PARA CREAR UN NUEVO ARRAY DE OBJETOS DE TIPO PRODUCTO
      this.productos = productos.map(producto => new Producto(producto));
  }
  //MÈTODO PARA GUARDAR EL ARRAY DE PRODUCTOS EN STORAGE
  guardarProductos() {
      localStorage.setItem('productos', JSON.stringify(this.productos));
  }
  //MÊTODO PARA AGREGAR UN PRODUCTO AL ARRAY DE PRODUCTOS
  agregarProducto(producto) {
      this.productos.push(new Producto(producto));
      this.guardarProductos();
  }
  //MÊTODO PARA ELIMINAR UN PRODUCTO DEL ARRAY DE PRODUCTOS
  eliminarProducto(id) {
      this.productos = this.productos.filter(producto => producto.id !== id);
      this.guardarProductos();
  }
  //MÊTODO PARA BUSCAR UN PRODUCTO DEL ARRAY DE PRODUCTOS
  buscarProducto(id) {
      return this.productos.find(producto => producto.id === id);
  }
}

export default ProductoModel;