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

// import React, { useState, createContext } from "react";
// import Product from '../components/Data/dataProduct'

// export const CardContext = createContext();

// export const CardProvider = (props) => {
//   const [items, setItems] = useState([]);
//   const carrito = [];

//   setTimeout(() => {
//     setItems(Product);
//   }, 1000);

//   const addCarrito = (e) => {
//     if (e.target.classList.contains("btn-shop")) {
//       setCarro(e.target.parentElement);
//     }
//     e.stopPropagation();
//   };

//   const setCarro = (objeto) => {
//     const producto = {
//       id: objeto.querySelector(".btn-shop").dataset.id,
//       title: objeto.querySelector(".title").textContent,
//       price: objeto.querySelector("span.copy").textContent,
//       cant: parseInt(objeto.querySelector(".countCard").textContent),
//     };
//     if (carrito.hasOwnProperty(producto.id)) {
//       producto.cant = carrito[producto.id].cant + producto.cant;
//     }

//     carrito[producto.id] = { ...producto };

//     console.log(carrito);
//   };
//   return <div>
//       <CardContext.Provider>
//           {props.children}
//       </CardContext.Provider>
//   </div>;
// };
