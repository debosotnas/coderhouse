
export default function UserDetails ({ picture, id, firstName, lastName, phone, registerDate}) {
    return (
        <div>
            <img src={picture} />
            <span>Id: {id} </span>
            <span>Nombre: {firstName} </span>
            <span>Apellido: {lastName} </span>
            <span>Tel: {phone} </span>
            <span>Registro: {registerDate} </span>
        </div>
    );
}