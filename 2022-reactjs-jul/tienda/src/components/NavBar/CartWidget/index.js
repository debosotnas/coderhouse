import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.css';

import { CartContext } from '../../../context/CartContext';

export default function CartWidget() {

  const { cartData } = useContext(CartContext);

  const totalItems = cartData.reduce((prev, next) => {
    return prev + next.quantity;
  }, 0);

  return (
    <Link className='cart-widget' to={'/cart'}>
        <span className="material-symbols-outlined">
            shopping_cart
        </span>
        <span>{ totalItems }</span>
    </Link>
  )
}
