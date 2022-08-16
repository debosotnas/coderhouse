import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './ItemCount.css';

export default function ItemCount({ onAddItemsToCart, stock, initial }) {
    const [selectedNumItems, setSelectedNumItems] = useState(Number(initial));

    const onAdd = () => {
        console.log(`${selectedNumItems} agregados al carrito!`);
        onAddItemsToCart(selectedNumItems);
    }
    const onAddSelectedItems = () => {
        if (selectedNumItems < stock) {
            setSelectedNumItems(selectedNumItems + 1);
        }
    }
    const onSubSelectedItems = () => {
        if (selectedNumItems > 1) {
            setSelectedNumItems(selectedNumItems - 1);
        }
    }
    return (
        <div className="item-count">
            <div>
                <Button onClick={onSubSelectedItems}>-</Button>
                {selectedNumItems}
                <Button onClick={onAddSelectedItems}>+</Button>
            </div>
            <Button onClick={onAdd} >Agregar al carrito</Button>
        </div>
    );
}
