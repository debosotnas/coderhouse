import React from "react";
import Item from "../Item";
import ItemDetail from "../ItemDetail";
import './ItemList.css';

export default function ItemList({ products }) {
    return (
        <div className="item-list">
            {Array.isArray(products) &&
                products.map((product) => {
                    // Ayudamemoria -> Esto que sigue:
                    return <Item key={product.id} {...product} />;
                    // return <ItemDetail key={product.id} {...product} />;

                    // es equivalente a hacer:
                    //
                    //      const {id, title, description, stock, initial, images } = product;
                    //      return (
                    //         <Item key={id} id={id} title={title} description={description} stock={stock} initial={initial} images={images} />
                    //      )
                })}
        </div>
    );
}
