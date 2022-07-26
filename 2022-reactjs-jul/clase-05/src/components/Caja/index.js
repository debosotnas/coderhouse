import { useState } from "react";
import "./Caja.css";

function Caja(props) {
    const [mostrar, setMostrar] = useState(false);


    // fetch('http:....').then((p) => {
    //     // p...
    // });

    function mostrarOcultarContador() {
        setMostrar(!mostrar);
    }

    return (
        <div className="caja">
            {props.saludo}
            <input
                type="checkbox"
                id="mostrarclick"
                onClick={mostrarOcultarContador}
            />{" "}
            <label htmlFor="mostrarclick">Mostrar boton de contador</label>
            { mostrar ? props.children : null }
        </div>
    );
}

export default Caja;
