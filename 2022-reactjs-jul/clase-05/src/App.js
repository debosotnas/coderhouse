import './App.css';
import { Routes, Route, Navigate, BrowserRouter, NavLink, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import UserDetailsPage from './pages/UserDetailsPage';
import AboutPage from './pages/AboutPage';

function App() {

  return (
    <div className="app">
      <div className="nav">
        <NavLink 
            to={'/'}
            className={({isActive}) => isActive ? 'class-for-active-link' : undefined }
        >Home</NavLink>
        {' '}
        <NavLink 
            to={'/users'}
            className={({isActive}) => isActive ? 'class-for-active-link' : undefined }
        >Show Users</NavLink>
        {' '}
        <NavLink 
            to={'/about-us'}
            className={({isActive}) => isActive ? 'class-for-active-link' : undefined }
        >About Us</NavLink>
      </div>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserDetailsPage />} />
      </Routes>

    </div>
  );
}

export default App;
