import './App.css';
import { BoxListContainer } from './components';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:idDeUsuario' element={<UserDetails />} />
      </Routes>

    </div>
  );
}

export default App;
