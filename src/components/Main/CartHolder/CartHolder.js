import React from "react";

// icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

export const CartHolder = (props) => {
  const iconClose = <FontAwesomeIcon icon={faTimes} size="2x" />;
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <div className="cart-Holder">
      <span
        onClick={() => {
          document
            .querySelector(".cart-Holder")
            .classList.remove("cart-Holder-Open");
        }}
      >
        {iconClose}
      </span>
      <div className="container-itemsCart">
        {cartItems.length === 0 && (
          <div className="title">No hay productos en su carrito</div>
        )}
        {cartItems.map((product) => {
          return (
            <div className="box-itemsCards" key={product.id}>
              <div className="item-image" >
                <img src={product.img} alt={product.name} style={{ width: 100 }} />
              </div>
              <section className="item-info">
                <div className="item-name">{product.title}</div>
                <div>
                  <button onClick={() => onAdd(product)}>+</button>
                  {""}
                  <button onClick={() => onRemove(product)}>-</button>
                </div>
                <div className="item-qty">
                  {product.qty} x ${product.price.toFixed(2)}
                </div>
              </section>
            </div>
          );
        })}
        {cartItems.length !== 0 && (
          <div className='box-checkout'>
            <div className="items-price">
              <span>Total:</span>
              <span>${itemsPrice.toFixed(2)}</span>
            </div>
            <button className="btn-buy" onClick={() => alert("ToDo Checkout")}>
              Iniciar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
