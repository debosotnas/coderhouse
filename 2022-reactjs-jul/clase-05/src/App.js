import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';
import UserDetailsContainer from './components/UserDetailsContainer/UserDetailsContainer';
import CategoriesListDetail from './components/UserDetailsContainer/UserDetailsContainer';
import Info from './components/UserDetailsContainer/UserDetailsContainer';
import About from './pages/About';

function App() {

  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Navigate replace to="/home" />} /> */}
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserDetailsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
