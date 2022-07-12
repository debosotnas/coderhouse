import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

const contenedorApp = document.querySelector('#root');

const miDiv = <div id='app'>
    <div className='cabezal'><h1>Lorem ipsum donor sit</h1></div>
    <div id='bloque-cuerpo'>
        <div className='bloque-1'></div>
        <div className='bloque-2'></div>
        <div className='bloque-3'></div>
        <div className='bloque-4'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed metus leo, consectetur eu tempus non. Eleifend a lorem.
            <br />
            <button onClick={() => { alert("un saludo pa' todos los coders!") }}>Saludar!</button>
        </div>
    </div>
    <div className='pie'>
        Sed metus leo, consectetur eu tempus non
    </div>
</div>;

const reactAppDom = ReactDOM.createRoot(contenedorApp);
reactAppDom.render(miDiv);


