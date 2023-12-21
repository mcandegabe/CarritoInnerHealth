import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import InnerHealthStoreRound from "../../images/InnerHealthStoreRound.png";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      setIsLoading(true);

      const itemDoc = doc(db, "productos", id);
      const itemSnapshot = await getDoc(itemDoc);

      if (itemSnapshot.exists()) {
        setItem({ id: itemSnapshot.id, ...itemSnapshot.data() });
      } else {
        console.log("El producto no existe");
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    fetchItem().catch((error) => {
      console.log(error);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="index">
          <div className="content">
            <img
              src={InnerHealthStoreRound}
              className="loading_img rotate"
              alt="Inner Health Group Store"
            />
            <p>Cargando los detalles del producto...</p>
          </div>
        </div>
      ) : (
        <ItemDetail {...item} />
      )}
    </>
  );
};