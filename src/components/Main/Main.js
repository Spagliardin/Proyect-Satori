import { Cards } from "./Cards/Card";
// import Product from "../Data/dataProduct";

import React, { useState, useEffect } from "react";
import { db } from "../../Firebase";

export const Main = () => {
  const [items, setItems] = useState([]);
  // const cart = [];

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

  // const addcart = (e) => {
  //   if (e.target.classList.contains("btn-shop")) {
  //     setCart(e.target.parentElement);
  //   }
  //   e.stopPropagation();
  // };

  // const setCart = (objeto) => {
  //   const producto = {
  //     id: objeto.querySelector(".btn-shop").dataset.id,
  //     title: objeto.querySelector(".title").textContent,
  //     price: objeto.querySelector("span.copy").textContent,
  //     cant: parseInt(objeto.querySelector(".countCard").textContent),
  //   };
  //   if (cart.hasOwnProperty(producto.id)) {
  //     producto.cant = cart[producto.id].cant + producto.cant;
  //   }

  //   cart[producto.id] = { ...producto };
  //   paintCart();
  // };

  // const paintCart = () => {
  //   console.log(cart);
  //   Object.values(cart).forEach((producto) => {
  //     return (
  //       <div className="container-itemsCart">
  //         <ul>
  //           <li>{producto.id}</li>
  //           <li>{producto.title}</li>
  //           <li>{producto.price}</li>
  //           <li>{producto.cant}</li>
  //         </ul>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div>
      <div
        className="container-cards"
        // onClick={(e) => {
        //   addcart(e);
        // }}
      >
        <Cards items={items} />
      </div>
    </div>
  );
};
