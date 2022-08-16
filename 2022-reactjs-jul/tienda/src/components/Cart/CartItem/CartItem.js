import React, { memo } from 'react'

function CartItem({ id, quantity }) {

  console.log('>>> render CartItem!');

  return (
    <div>
        <h3>Detalles:</h3>
        <div>
            ID: <span>{id}</span>
            <br />
            Cantidad: <span>{quantity}</span>
        </div>
    </div>
  )
}

const CartItemMemo = memo(CartItem);

export default CartItemMemo;