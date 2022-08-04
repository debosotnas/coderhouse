

/* 
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

import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { DummyApi } from "../../api/DummyApi";
import UserDetails from "../UserDetails/UserDetails";
import './UserDetailsContainer.css';

export default function UserDetailsContainer() {
    const { id: userId } = useParams();
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        async function loadUserInfo () {
            const res = await DummyApi.getUserInfo(userId);
            const data = await res.json();
            console.log(data);
            setUserInfo({...data});
        }

        loadUserInfo();
    }, [userId]);

    return (

        <div className="user-details-container">
            <div className="actions">
                <NavLink to={'/users'}>Volver</NavLink>
                <Link to={'/'}>Ir a Home</Link>
            </div>
            <UserDetails {...userInfo}></UserDetails>
        </div>
    );
}