import logo from './logo.svg';
import './App.css';
// import Card from './components/Card';
import Form from './components/Form';
import Product from './components/Product';

function App() {
  return (
    <div className="container app">
      <div className="row">
        <div className="col">
          <Form />
          <br />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default App;
