import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/logo.svg';
import CartWidget from './CartWidget';
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className='nav-bar'>
        <Link className='logo' to={'/'}>
          <img src={logo} alt="" /> 
          <span>Mi Tienda!</span>
        </Link>
        <div className='ctas'>
          <Link to={'/category/1'}>Celulares de siempre</Link>
          <Link to={'/category/2'}>Celulares con colores</Link>
          <CartWidget />
        </div>
    </nav>
  )
}
