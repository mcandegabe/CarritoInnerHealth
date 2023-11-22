import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
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
      <button className="btn btn-outline-primary add-btn" onClick={() => onAdd(count)}>Agregar a la cesta</button>
    </div>
  );
};
