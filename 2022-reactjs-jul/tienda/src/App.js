import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ItemDetailContainer } from './components/Detail';
import { ItemListContainer } from './components/List';
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import CartCustomProvider from './context/CartContext';

function App() {

    return (
        <CartCustomProvider>
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
        </CartCustomProvider>
    );
}

export default App;
