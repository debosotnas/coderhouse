import { useEffect, useState } from 'react';
import { DummyApi } from '../../api/DummyApi';

import BoxList from "../BoxList/BoxList";


export default function BoxListContainer () {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        async function callDummyApi () {
          const response = await DummyApi.getUsers(); // llamo al server para q me de los users
          const jsonParsed = await response.json(); // leo el json de la respuesta del servidor
          setUsers(jsonParsed.data);
    
          // https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca
    
        //   console.log('ID: ', jsonParsed.data[0].id);
        //   const usuarioPruebaRes = await DummyApi.getUserInfo(jsonParsed.data[0].id);
        //   const miJsonUser = await usuarioPruebaRes.json(); // leo el json de la respuesta del servidor
        //   console.log(miJsonUser);
        }
    
        callDummyApi();
    
      }, []);

    return (
        <div className="box-list-container">
            <BoxList userList={users} />
        </div>
    );
}