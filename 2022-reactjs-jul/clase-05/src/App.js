import { useEffect, useState } from 'react';
import { DummyApi } from './api/DummyApi';
import './App.css';
import Caja from './components/Caja';
import Contador from './components/Contador';

function App() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {

    async function llamarDummy () {
      const respuestaDelServidor = await DummyApi.getUsers(); // llamo al server para q me de los usuarios
      const miJson = await respuestaDelServidor.json(); // leo el json de la respuesta del servidor
      setUsuarios(miJson.data);
    }

    llamarDummy();

  }, []);

  return (
    <div className="App">
      <img src='http://fpoimg.com/310x250?text=CursoDeReact' />
      <Caja saludo="hola mundo">
        <Contador></Contador>
      </Caja>
      {
      usuarios.map((usuario) => {
        return (
          <div key={usuario.id}>
            <img src={usuario.picture} />
            <h4>{`${usuario.firstName} ${usuario.lastName}`}</h4>
          </div>
        );
      })
      }
    </div>
  );
}

export default App;
