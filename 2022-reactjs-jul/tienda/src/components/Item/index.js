import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Item.css'

export default function Item({
    id,
    title,
    description,
    images,
}) {

    // const valuesDelContext = useContext(CartContext);
    // // const { productos, saludar } = useContext(CartContext);

    // // console.log('>> Productos: ', productos);
    // // saludar();
    // console.log('>> Desde el context: ', valuesDelContext);


    const firstImageInfo = Array.isArray(images) && images.length && images[0];

    return (
        <div className="item">
            <img src={firstImageInfo.src} alt="" />
            <div className="title">{title}</div>
            <p>{description}</p>
            <Link className="link" to={`/item/${id}`} >Ver detalle del producto</Link>
        </div>
    );
}
