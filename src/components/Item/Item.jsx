import { Link } from "react-router-dom";

export const Item = ({ id, name, img, price}) => {
    return (
      <div className="item">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title clamp-text" title={name}>{name}</h5>
            <img src={img} alt="" />
            <p>US$ {price} </p>
            <div className="button-container">
              <Link to={`/item/${id}`}>
                <button className="btn btn-outline-success item-btn">Más información</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };