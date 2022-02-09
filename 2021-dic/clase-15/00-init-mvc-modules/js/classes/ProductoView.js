class ProductoView {
    listarProductos(padre, data, callback){
        let html = '';
        for (const producto of data) {
             html+=`<div>
                        <input value="${producto.id}" type="hidden">
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button class="btnComprar">Comprar</button>
                    </div>`;
        }
        $(padre).html(html);
        $(".btnComprar").click(callback);
    }
}

export default ProductoView;