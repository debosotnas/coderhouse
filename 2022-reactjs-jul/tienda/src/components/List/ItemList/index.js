import React from "react";
import Item from "../Item";
import './ItemList.css';

export default function ItemList({ products }) {
    return (
        <div className="item-list">
            {Array.isArray(products) &&
                products.map((product) => {
                    return <Item key={product.id} {...product} />;
                })}
        </div>
    );
}
