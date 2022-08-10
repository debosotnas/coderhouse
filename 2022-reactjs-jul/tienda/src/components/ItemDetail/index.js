import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import "./ItemDetail.css";

export default function ItemDetail({
    id,
    title,
    description,
    stock,
    initial,
    images,
}) {
    const firstImageInfo = Array.isArray(images) && images.length && images[0];

    //>>>>>> Inicio de aclaracion de para primera entrega
    // -- Esto no es parte de la primera entrega del proyecto.
    // -- asi como tampoco es parte de la primera entrega el uso de "onAddItemsToCart={onAdd}"
    // -- al llamar a ItemCount, el uso de "productAddedToCard" o la llamada a "onAdd" dentro del componente ItemCount.
    const [productAddedToCard, setProductAddedToCard] = useState(false);
    const onAdd = (quantityToAdd) => {
        console.log(
            ">> Evento recibido del ItemCount! - Cantidad agregada: ",
            quantityToAdd
        );
        setProductAddedToCard(true);
    };
    ///>>>>>> Fin de aclaracion de para primera entrega

    return (
        <div className="item-detail">
            <img src={firstImageInfo.src} alt="" />
            <div className="title">{title}</div>
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
