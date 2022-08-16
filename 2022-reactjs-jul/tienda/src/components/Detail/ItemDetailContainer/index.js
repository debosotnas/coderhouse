import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../../api/APIData";
import ItemDetail from "../ItemDetail";

import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const { id } = useParams();
    const productId = !isNaN(id) && +id;

    const [productData, setProductData] = useState({});
    useEffect(() => {
        setProductData({});
        const productDataPromise = getItem(productId);
        productDataPromise.then(
            (data) => {
                setProductData(data);
            },
            (err) => {
                console.log(
                    "Ha ocurrido un error al buscar la info del Producto: ",
                    err
                );
            }
        );
    }, []);
    return (
        <div className="item-detail-container">
            {productData && productData.id ? (
                <ItemDetail {...productData} />
            ) : (
                <div className="loading">Cargando detalle del producto...</div>
            )}
        </div>
    );
}
