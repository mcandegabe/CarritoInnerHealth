import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ name, description, img, price, stock }) => {
   
    const onAdd = (items) => { 
        alert(`Se agregaron ${items} al carrito`)
     }

  return (
    <div className="item-details">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {description} </p>
          <div className="price-cart">
            <p className="card-price">Valor: US$ {price} </p>
            <ItemCount stock={stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};
