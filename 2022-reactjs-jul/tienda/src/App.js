// import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
    return (
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
                    <Route
                        path="/cart"
                        element={<Cart />}
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
