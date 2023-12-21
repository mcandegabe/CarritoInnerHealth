import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from "../ItemList/ItemList";
import InnerHealthStoreRound from "../../images/InnerHealthStoreRound.png";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const productsCollection = collection(db, "productos");
      const q = category
        ? query(productsCollection, where("category", "==", category))
        : productsCollection;

      const querySnapshot = await getDocs(q);

      const productsData = [];
      querySnapshot.forEach((doc) => {
        productsData.push({ id: doc.id, ...doc.data() });
      });

      setProducts(productsData);

      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    fetchData().catch((error) => console.log(error));
  }, [category]);

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
            <p>Cargando los productos disponibles...</p>
          </div>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
