import React, { useContext } from 'react';
import './Cart.css';

import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem/CartItem';

export default function Cart() {

  const  { cartData } = useContext(CartContext);

  console.log('>> cartData: ', cartData.length);

  return (
    <div className='cart'>
        { (cartData.length > 0) ? cartData.map((item) => {
            return <CartItem key={item.id} id={item.id} quantity={item.quantity} />
          })
          : 
          "No hay elementos en el Cart!"
        }
    </div>
  )
}
