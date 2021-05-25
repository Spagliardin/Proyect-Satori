import React from "react";

// icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

export const CartHolder = (props) => {
  const iconClose = <FontAwesomeIcon icon={faTimes} size="2x" />;
  const { cartItems, onAdd, onRemove } = props;
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
      {/* <h2>Carrito de compras</h2> */}
      <div className="container-itemsCart">
        {cartItems.length === 0 && <div>Carrito vacio</div>}
        {cartItems.map((product) => {
            return(
          <div className='box-itemsCards' key={product.id}>
            <img src={product.img} style={{width : 75}} />
            <section>
                <div>{product.title}</div>
                <div>
                    <button onClick={() => onAdd(product)}>+</button>
                    {""}
                    <button onClick={() => onRemove(product)}>-</button>
                </div>
                <div>
                {product.qty} x {product.price}
                </div>
            </section>
          </div>
          )
        })}
      </div>
    </div>
  );
};
