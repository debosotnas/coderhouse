import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import './Item.css'

export default function Item({
    id,
    title,
    description,
    images,
}) {
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
