import React, { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const storedCartItems = sessionStorage.getItem("cartItems");
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      const cartItemsWithSubtotal = parsedCartItems.map((item) => ({
        ...item,
        subTotal: item.quantity * item.price,
      }));
      setCartItems(cartItemsWithSubtotal);
      updateCount(cartItemsWithSubtotal);
    }
  }, []);

  const updateCount = (items) => {
    const totalCount = items.reduce((total, item) => total + item.quantity, 0);
    setCount(totalCount);
  };

  const updateCartItems = (newCartItems) => {
    setCartItems(newCartItems);
    updateCount(newCartItems);
    sessionStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const addItem = (item, quantity) => {
    const { id, name, price } = item;
  
    const existingProductIndex = cartItems.findIndex((product) => product.id === id);
  
    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity = quantity;
      updatedCartItems[existingProductIndex].subTotal = quantity * price;
  
      updateCartItems(updatedCartItems);
    } else {
      const newItem = {
        id,
        name,
        img: item.img,
        price,
        quantity,
        subTotal: quantity * price,
      };
  
      updateCartItems([...cartItems, newItem]);
    }
  
    MySwal.fire({
      icon: 'success',
      title: 'Producto/s añadido/s al carrito',
      showConfirmButton: false,
      timer: 1500,
    });
  
    updateCart();
  };

  const removeItem = (id, name) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    updateCartItems(updatedCartItems);

    MySwal.fire({
      icon: 'success',
      title: `Producto/s eliminado/s del carrito`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const clearCartItems = () => {
    return new Promise((resolve) => {
      updateCartItems([]);
      sessionStorage.removeItem("cartItems");
      resolve();
    });
  };

  const calculateTotals = () => {
    const total = cartItems.reduce((acc, item) => acc + item.subTotal, 0);
    const quantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    return { total, quantity };
  };

  const updateCart = () => {
    const storedCartItems = sessionStorage.getItem("cartItems");
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      const cartItemsWithSubtotal = parsedCartItems.map((item) => ({
        ...item,
        subTotal: item.quantity * item.price,
      }));
      setCartItems(cartItemsWithSubtotal);
      updateCount(cartItemsWithSubtotal);
    }
  };

  const contextValue = {
    cartItems,
    totalCartItems: calculateTotals().total,
    totalQuantity: calculateTotals().quantity,
    count,
    addItem,
    removeItem,
    clearCartItems,
    updateCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};