import React from 'react';
import './CartWidget.css';

export default function CartWidget() {
  return (
    <a className='cart-widget' href='#'>
        <span className="material-symbols-outlined">
            shopping_cart
        </span>
    </a>
  )
}
