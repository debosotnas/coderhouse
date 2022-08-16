import React, { useContext } from 'react';
import './CartWidget.css';

import { CartContext } from '../../../context/CartContext';

export default function CartWidget() {

  const { cartData } = useContext(CartContext);

  return (
    <a className='cart-widget' href='/cart'>
        <span className="material-symbols-outlined">
            shopping_cart
        </span>
        <span>{ cartData.length }</span>
    </a>
  )
}
