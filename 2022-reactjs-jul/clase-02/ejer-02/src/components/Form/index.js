// TODO: Queda pendiente el crear este archivo de estilos para mejorar el aspecto visual de los elementos
// import './Form.css';

/* Creamos 3 componentes (Input, TextArea, Submit) */
const Input = (props) => {
    return (
        <input type="text" placeholder={props.placeholder} />
    )
}
const TextArea = () => {
    return (
        <textarea styles={{width: 500, height: 400}}></textarea>
    )
}
const Submit = (props) => {
    return (
        <button type="submit">{props.label}</button>
    )
}

/* Creamos el componente principal de este archivo (este componente será el que exportaremos) */
function Form () {
    return (
        <form>
            <Input placeholder={'Ingrese el nombre'} />
            <Input placeholder={'Ingrese el email'} />
            <TextArea />
            <Submit label={'Enviar'} />
        </form>
    );
}

export default Form;