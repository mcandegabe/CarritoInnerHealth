// components/LoadProducts/LoadProducts.jsx

import React from "react";
import { loadProducts } from "../../utils/loadProducts";

export const LoadProducts = () => {
    const handleLoadProducts = () => {
      loadProducts();
    };
  
    return (
      <div>
        <h2>Cargar Productos</h2>
        <button onClick={handleLoadProducts}>Cargar Productos</button>
      </div>
    );
};