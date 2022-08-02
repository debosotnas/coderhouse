import "./Box.css";

function Box({ id, img, name, last }) {

    const loadUserDetails = () => {
        console.log(' UserId > ', id);
    }

    return (
        <div className="user-box">
            <img src={img} />
            <span>ID: {id}</span>
            <span>{`${name} ${last}`}</span>

            <button onClick={loadUserDetails}>Cargar Detalles del User</button>
        </div>         
    );
}

export default Box;
