import './UserDetails.css';

export default function UserDetails ({picture, id, firstName, lastName, phone, registerDate }) {

    return (
        <div className='user-details'>
            <img src={picture} />
            <span className='user-id'>Id: {id} </span>
            <span>Nombre: {firstName} </span>
            <span>Apellido: {lastName} </span>
            <span>Tel: {phone} </span>
            <span>Registro: {registerDate} </span>
        </div>
    );
}