import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import InnerHealthStoreRound from "../../images/InnerHealthStoreRound.png";

export const ItemListContainer = () => {
  const { category } = useParams();
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getProducts()
      .then((resp) => {
        if (category) { 
          const productsFilter = resp.filter(
            (product) => product.category === category
          );

          if (productsFilter.length > 0) {
            setProducts(productsFilter);
          } else {
            setProducts(resp);
          }
        } else {
          setProducts(resp);
        }

        setTimeout(() => {
          setIsLoading(false);
        }, 1500);

        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <>
      {isLoading ? (
        <div className="index">
          <div className="content">
            <img src={InnerHealthStoreRound} className="loading_img" alt="Inner Health Group Store" />
            <p>Cargando los productos disponibles...</p>
          </div>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
