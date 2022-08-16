import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import "./ItemDetail.css";

import { CartContext } from '../../../context/CartContext';

export default function ItemDetail({
    id,
    title,
    price,
    description,
    stock,
    initial,
    images,
}) {

    const { addCartItem } = useContext(CartContext);

    const firstImageInfo = Array.isArray(images) && images.length && images[0];

    const [productAddedToCard, setProductAddedToCard] = useState(false);
    const onAdd = (quantityToAdd) => {

        addCartItem( { 
            id, 
            title,
            quantity: quantityToAdd,
            image: firstImageInfo.src,
            description,
            price
         } );

        console.log(
            ">> Evento recibido del ItemCount! - Cantidad agregada: ",
            quantityToAdd
        );
        setProductAddedToCard(true);
    };


    return (
        <div className="item-detail">
            <img src={firstImageInfo.src} alt="" />
            <div className="title">{title}</div>
            <div className="price">$ {price}</div>
            <p>{description}</p>
            {productAddedToCard ? <Link to={`/cart`} >Producto agregado, ver carrito!</Link> : (
                <ItemCount
                    onAddItemsToCart={onAdd}
                    stock={stock}
                    initial={initial}
                ></ItemCount>
            )}
        </div>
    );
}
