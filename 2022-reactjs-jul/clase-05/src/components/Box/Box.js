import "./Box.css";

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

function Box({ id, img, name, last }) {
    const [contador, setContador] = useState(0);

    function fnOnClickPersonal (evt) {
        console.log('>> Name: ', name, ' - Event Info: ', evt);
        setContador(contador + 1);
    }

    const navigate = useNavigate();
    // useEffect(() => {

    //     document.getElementById(`id-${id}`).addEventListener('click', fnOnClickPersonal);

    //     return () => {
    //         document.getElementById(`id-${id}`).removeEventListener('click', fnOnClickPersonal);            
    //     }
    // });

    const loadUserDetails = () => {
        console.log(' UserId > ', id);
        navigate('/users/' + id);
    }


    return (
        <div className="user-box">
            <img src={img} />
            <span className="user-id">ID: {id}</span>
            <span>{`${name} ${last}`}</span>
            <span>{contador}</span>

            <button onClick={loadUserDetails}>Ver detalles</button>
            <br />
            <button onClick={fnOnClickPersonal}>Ver LinkedIn</button>

        </div>         
    );
}

export default Box;
