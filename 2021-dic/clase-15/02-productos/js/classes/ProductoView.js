class ProductoView {
    //METODO PARA CREAR LA VISTA DE AGREGAR PRODUCTO
    agregarProducto(padre, callback) {
        $(padre).html(`
            <section>
                <h1>AGREGAR PRODUCTO</h1>
                <input type ="text"   placeholder="Nombre">
                <input type ="number" placeholder="Precio">
                <button id="btnEnviar">ENVIAR</button>
            </section>
        `);
        $("#btnEnviar").click(callback);
    }
    //METODO PARA CREAR LA VISTA DE LISTADO DE PRODUCTOS
    listarProductos(padre, data, callback) {
        let html = '';
        for (const producto of data) {
            html += `<div>
                        <input value="${producto.id}" type="hidden">
                        <strong> ID: ${producto.id}</strong>
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button class="btnComprar">Comprar</button>
                    </div>`;
        }
        $(padre).html(html);
        $(".btnComprar").click(callback);
    }
    //METODO PARA CREAR LA VISTA DE BUSQUEDA DE PRODUCTO
    buscarProducto(padre, callback) {
        $(padre).html(`
            <section>
                <h1>BUSCAR PRODUCTO POR ID</h1>
                <input type="number">
                <button id="btnBuscar">Buscar</button>
            </section>
        `);
        $("#btnBuscar").click(callback);
    }

    mostrarErrorPage(padre) {
        $(padre).html("<h2>Error 404!</h2>");
    }

    mostrarProductoEncontrado(padre, encontrado) {
        $(padre).html(`
            <section>
                <h1>ID : ${encontrado.id}</h1>
                <strong>Nombre</strong>: ${encontrado.nombre}
                <br />
                <strong>Precio</strong>: ${encontrado.precio}
            </section>
        `);
    }


}

export default ProductoView;