// Importamos estilos generales del componente actual (App)
import './App.css';

// Importamos nuestros componentes para usarlos luego en el JSX
import Form from './components/Form';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header titulo="¡Escríbenos!" />
      <Form></Form>
    </div>
  );
}

export default App;
