import { Cart, ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from "./context/CartContext";
import { LoadProducts } from "./components/LoadProducts/LoadProducts";

export const App = () => {
  return (
    <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/load-products" element={<LoadProducts />} /> //* este acceso solo sirve para cuando queremos cargar productos en FireBase pero no está activo para el acceso público *//
          </Routes>
        </CartContextProvider>
    </BrowserRouter>
  );
};