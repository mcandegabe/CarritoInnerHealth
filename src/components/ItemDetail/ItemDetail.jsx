import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({ id, name, description, img, price, stock }) => {
  const onAdd = (quantity) => {
    const cartItem = { id, name, price, quantity };
    const existingItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    
    const index = existingItems.findIndex((item) => item.id === id);

    if (index !== -1) {
      // Si el elemento ya existe, actualiza la cantidad y el subtotal
      existingItems[index].quantity += quantity;
      existingItems[index].subTotal = existingItems[index].quantity * existingItems[index].price;
    } else {
      // Si el elemento no existe, agrégalo al array
      existingItems.push(cartItem);
    }

    sessionStorage.setItem('cartItems', JSON.stringify(existingItems));
  };

  return (
    <div className="item-details">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {description} </p>
          <div className="price-cart">
            <p className="card-price">Valor: US$ {price} </p>
            <ItemCount stock={stock} onAdd={onAdd} item={{ id, name, price }} />
          </div>
        </div>
      </div>
    </div>
  );
};