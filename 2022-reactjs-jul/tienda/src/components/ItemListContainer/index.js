import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsData } from "../../api/APIData";
import ItemList from "../ItemList";
import './ItemListContainer.css';

export default function ItemListContainer() {
    const { id } = useParams();
    const categoryId = !isNaN(id) && +id;

    const [productsData, setProductsData] = useState([]);
    useEffect(() => {

        setProductsData([]);

        const productsDataPromise = getProductsData(categoryId);

        productsDataPromise.then(
            (data) => {
                setProductsData(data);
            },
            (err) => {
                console.log(
                    "Ha ocurrido un error al traer los productos: ",
                    err
                );
            }
        );
    }, [categoryId]);

    return (
        <div className="item-list-container">
            {Array.isArray(productsData) && productsData.length === 0 ? (
                <div className="loading">Cargando productos...</div>
            ) : (
                <ItemList products={productsData} />
            )}
        </div>
    );
}
