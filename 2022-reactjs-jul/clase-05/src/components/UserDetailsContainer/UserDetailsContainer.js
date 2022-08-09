
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
            <UserDetails {...userInfo}></UserDetails>
            <div className="actions">
                <NavLink to={'/users'}>Volver</NavLink>
            </div>
        </div>
    );
}