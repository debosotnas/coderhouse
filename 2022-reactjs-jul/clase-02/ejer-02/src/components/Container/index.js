/*

function Container() {
    return <div style={estilos}>Hola mundo</div>;
}
*/

const estilos = {
    borderWidth: '5px',
    borderColor: '#f00',
    borderStyle: 'solid',
    padding: '40px',
    margin: '40px',
    fontSize: '3rem',
};
/* 
    props = {
        nombre,
        apellido,
        texto
    }
*/

function Container( props ) { //props.texto
    console.log('>> estas son las props: ', props);


    // const nuevoNombre = props.nombre ? props.nombre : 'Lalo';

    props.callBack && props.callBack();

    return (
        <div style={estilos}>
            {props.nombre}
            {props.apellido}
            {props.texto}
            <div>
                { props.children }
            </div>
        </div>
    );
}

export default Container;