import { Cards } from "./Cards/Card";
import Product from "../Data/dataProduct";

import React, { useState } from "react";

export const Main = () => {
  const [items, setItems] = useState([]);
  const carrito = []

  setTimeout(() => {
    setItems(Product);
  }, 1000);

  const addCarrito = (e) =>{
    if(e.target.classList.contains('btn-shop')){
      setCarro(e.target.parentElement)
    }
    e.stopPropagation()
  }

  const setCarro = objeto => {
    const producto = {
      id: objeto.querySelector('.btn-shop').dataset.id,
      title: objeto.querySelector('.title').textContent,
      price: objeto.querySelector('span.copy').textContent,
      cant: parseInt(objeto.querySelector('.countCard').textContent)
    }
    if(carrito.hasOwnProperty(producto.id)){
      producto.cant = carrito[producto.id].cant + producto.cant
    }

    carrito[producto.id] = {...producto}


    console.log(carrito)
  }

  

  return (
    <div>
      <div className="container-cards" onClick={(e) =>{
          addCarrito(e)
        }}>
        <Cards items={items} />
      </div>
    </div>
  );
};
