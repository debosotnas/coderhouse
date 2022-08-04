import { useState, useEffect } from 'react';
// hooks

function ListadoDeProductos() {


    useEffect(async () => {

        const prods = await fetch('htt....');
        // prods...

    }, []);
    



    return (
        <div>
            <div>
                {titulo}
                {desc}
            </div>
            <br />
            <button onClick={agregarAlCarr}>Agregar a carrito</button>
        </div>
    );
}
/*
1. MONTADO / MOUNT - renderiza el componente
2. Actualizacion / Update
    a. espera alguna modifacion o cambio en el estado
    b. cuando detecta cambio en el estado entonces procesa el cambio 
    c. re-renderiza y muestra el nuevo layout (con el nuevo estado)
3. DESMONTAR / UNMOUNT
*/

export default ListadoDeProductos;