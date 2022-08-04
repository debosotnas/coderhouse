import "./Box.css";
import { Link, useNavigate } from 'react-router-dom';

function Box({ id, img, name, last }) {

    const navigateFn = useNavigate();

    const loadUserDetails = () => {
        console.log(' UserId > ', id);
        navigateFn(`/users/${id}`);
    }

    return (
        <div className="user-box">
            <img src={img} />
            <span>ID: {id}</span>
            <span>{`${name} ${last}`}</span>

            <button onClick={loadUserDetails}>Cargar Detalles del User</button>
            <Link to={`/users/${id}` }>Ver detalles</Link>
        </div>         
    );
}

export default Box;
