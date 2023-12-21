import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ stock, initial = 1, item }) => {
  const [count, setCount] = useState(initial);
  const { addItem } = useContext(CartContext);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <div>
        <button className="btn btn-outline-secondary add-cart" onClick={increment}>
          +
        </button>
        <strong>{count}</strong>
        <button className="btn btn-outline-secondary add-cart" onClick={decrement}>
          -
        </button>
      </div>
      <button className="btn btn-outline-primary add-btn" onClick={() => addItem(item, count)}>Agregar a la cesta</button>
    </div>
  );
};

export { ItemCount };