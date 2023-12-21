import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { count } = useContext(CartContext);

  return (
    <>
      <FontAwesomeIcon icon={faShoppingCart} style={{ cursor: 'pointer' }} />
      <span>({count})</span>
    </>
  );
};