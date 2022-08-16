import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Item.css'

export default function Item({
    id,
    title,
    description,
    price,
    images,
}) {

    const firstImageInfo = Array.isArray(images) && images.length && images[0];

    return (
        <div className="item">
            <div className="imgs" style={{ backgroundImage: `url(${firstImageInfo.src})`}} />
            <div className="title">{title}</div>
            <div className="price">$ {price}</div>
            <p>{description}</p>
            <Link className="link" to={`/item/${id}`} >Ver detalle del producto</Link>
        </div>
    );
}
