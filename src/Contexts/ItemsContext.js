import { createContext, useState, useEffect } from "react";
import { db } from "../Firebase";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const getItem = async () => {
        setTimeout(() => {
          db.collection("items").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
              docs.push({ ...doc.data(), id: doc.id });
            });
            setItems(docs);
          });
        }, 1000);
      };

      useEffect(() => {
        getItem();
      }, []);



  return (
    <ProductContext.Provider value={items}>
      {children}
    </ProductContext.Provider>
  );
};
