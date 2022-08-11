import React, { useContext } from 'react';
import './Cart.css';

import { CartContext } from '../../context/CartContext';

export default function Cart() {

  const  { cartData } = useContext(CartContext);

  console.log('>> cartData: ', cartData);

  return (
    <div className='cart'>
        Aqui es posible ver la info del Cart!
        {
          cartData.map((item) => {
            return <div key={item.id}>{`ID: ${item.id} - Cantidad: ${item.quantity}`}</div>
          })

        }
    </div>
  )
}
