import React, { useState } from "react";

export const CartContext = React.createContext([]);

export default function CartCustomContext({ children }) {
    const [cart, setCart] = useState([]);

    const addCartItem = (id) => {
        const listaActualizada = [...cart, id];
        setCart(listaActualizada);
        console.log('>> elementos del carrito actualmente: ', listaActualizada);
    }

    return (<CartContext.Provider value={ { addCartItem, cartData: cart } }>
        {children}
    </CartContext.Provider>);
}
