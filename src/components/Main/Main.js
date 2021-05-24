import { Cards } from "./Cards/Card";
// import Product from "../Data/dataProduct";

//context
import { ProductContext } from '../../Contexts/ItemsContext'

import React, { useContext } from "react";

export const Main = () => {
  const value = useContext(ProductContext)
  // const cart = [];

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
        <Cards items={value} />
        {/* <Cart /> */}
      </div>
    </div>
  );
};
