import './App.css';
import Caja from './components/Caja';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <Caja saludo="hola mundo">
        <Contador></Contador>
      </Caja>
    </div>
  );
}

export default App;
