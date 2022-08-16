import React, { useState } from "react";

export const CartContext = React.createContext([]);

export default function CartCustomContext({ children }) {
    const [cart, setCart] = useState([]);

    const addCartItem = (item) => {
        const listaActualizada = cart.find(
            (itemEnCarrito) => itemEnCarrito.id === item.id
        )
            ? cart.map((itemEnCarrito) => {
                  if (itemEnCarrito.id === item.id) {
                      return {
                          ...itemEnCarrito,
                          quantity: itemEnCarrito.quantity + item.quantity,
                      };
                  }
                  return itemEnCarrito;
              })
            : [...cart, item];
        setCart(listaActualizada);
        console.log(">> elementos del carrito actualmente: ", listaActualizada);
    };

    return (
        <CartContext.Provider value={{ addCartItem, cartData: cart }}>
            {children}
        </CartContext.Provider>
    );
}
