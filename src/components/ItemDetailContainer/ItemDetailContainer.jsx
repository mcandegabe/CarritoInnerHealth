import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import InnerHealthStoreRound from "../../images/InnerHealthStoreRound.png";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setIsLoading(true);

      getProductById(id)
          .then(resp => {
              setItem(resp);
              setTimeout(() => {
                setIsLoading(false);
              }, 500);
            })
          .catch(error => {
              console.log(error);
              setIsLoading(false);
          });
  }, [id]);

  return (
      <>
          {isLoading ? (
              <div className="index">
                  <div className="content">
                      <img src={InnerHealthStoreRound} className="loading_img" alt="Inner Health Group Store" />
                      <p>Cargando los detalles del producto...</p>
                  </div>
              </div>
          ) : (
              <ItemDetail {...item} />
          )}
      </>
  );
};