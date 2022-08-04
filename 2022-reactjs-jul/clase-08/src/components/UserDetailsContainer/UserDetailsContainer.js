/*

OK 1- obtener el ID que vino por param
OK 2- voy a llamar al EndPoint para traer datos del usuario
3- mostrar los datos usando el componente UserDetails

EJEMPLO DE DATOS DESDE EL SERVER:
    dateOfBirth: "1996-04-30T19:26:49.610Z"
    email: "sara.andersen@example.com"
    firstName: "Sara"
    gender: "female"
    id: "60d0fe4f5311236168a109ca"
    lastName: "Andersen"
    location: {street: '9614, SÃ¸ndermarksvej', city: 'Kongsvinger', state: 'Nordjylland', country: 'Denmark', timezone: '-9:00'}
    phone: "92694011"
    picture: "https://randomuser.me/api/portraits/women/58.jpg"
    registerDate: "2021-06-21T21:02:07.374Z"
    title: "ms"
    updatedDate: "2021-06-21T21:02:07.374Z"
*/

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DummyApi } from '../../api/DummyApi';
import UserDetails from '../UserDetails/UserDetails';

export default function UserDetailsContainer() {

    const { idDeUsuario } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        async function loadUserInfo () {
            const resp = await DummyApi.getUserInfo(idDeUsuario);
            const data = await resp.json();
            setUser(data);
        }
        loadUserInfo();
    }, [idDeUsuario]);

    return(
        <UserDetails {...user} />
    );

}