import React from "react";

export const Cart = () => {
  const cart = [];

  const addcart = (e) => {
    if (e.target.classList.contains("btn-shop")) {
      setCart(e.target.parentElement);
    }
    e.stopPropagation();
  };

  document.querySelector('.container-cards')

  const setCart = (objeto) => {
    const producto = {
      id: objeto.querySelector(".btn-shop").dataset.id,
      title: objeto.querySelector(".title").textContent,
      price: objeto.querySelector("span.copy").textContent,
      cant: parseInt(objeto.querySelector(".countCard").textContent),
    };
    if (cart.hasOwnProperty(producto.id)) {
      producto.cant = cart[producto.id].cant + producto.cant;
    }

    cart[producto.id] = { ...producto };
    paintCart();
  };

  const paintCart = () => {
    <div className="container-itemsCart">
    {Object.values(cart).forEach((producto) => {
      return (
        
          <ul>
            <li>{producto.id}</li>
            <li>{producto.title}</li>
            <li>{producto.price}</li>
            <li>{producto.cant}</li>
          </ul>
        
      );
    })};
  </div>
  };
};
