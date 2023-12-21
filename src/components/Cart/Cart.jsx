import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Checkout } from "../Checkout/Checkout";

export const Cart = () => {
  const { cartItems, totalCartItems, totalQuantity, removeItem, updateCart } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    updateCart();
  }, []);

  // Actualiza el estado de showCheckout cuando cambia el array cartItems
  useEffect(() => {
    setShowCheckout(cartItems.length > 0);
  }, [cartItems]);

  return (
    <div className="cart-detail">
      <h2>Detalle de sus productos</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="item-container">
            {cartItems.map((item) => (
              <li key={item.id} className="item">
                <div className="card card-body">
                  <p className="card-title clamp-text">{item.name}</p>
                  <p className="card-quantity clamp-text">Cantidad: {item.quantity}</p>
                  <p className="card-subtotal clamp-text">Subtotal: ${item.subTotal}</p>
                  <div className="button-container">
                    <button onClick={() => removeItem(item.id)} className="btn btn-outline-success item-btn">Eliminar</button> 
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <p className="total-products">Cantidad total de productos: {totalQuantity}</p>
            <p className="total-amount">Costo total: ${totalCartItems}</p>
          </div>
        </>
      )}
      {showCheckout && <Checkout />}
    </div>
  );
};