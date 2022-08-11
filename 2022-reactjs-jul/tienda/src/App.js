import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import CartCustomContext from './context/CartContext';

function App() {

    return (
        <CartCustomContext>
            <BrowserRouter>
                <div className="container">
                    <NavBar />

                    <Routes>
                        <Route path="/" element={<ItemListContainer />}></Route>
                        <Route
                            path="/category/:id"
                            element={<ItemListContainer />}
                        ></Route>
                        <Route
                            path="/item/:id"
                            element={<ItemDetailContainer />}
                        ></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </CartCustomContext>
    );
}

export default App;
