// icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// components
import { CountBtn } from "../CountBtn/CountBtn";

library.add(faShoppingCart);

export const Cards = ({ items }) => {
  return (
    <div className="container-cards">
      {items.map((product) => {
        return (
          <div
            className="card"
            key={product.id}
            style={{ backgroundImage: `url(${product.img})` }}
          >
            <div className="content-card">
              <h2 className="title">{product.title}</h2>
              <p className="copy">{product.desc}</p>
              <span className="copy">{product.price}</span>
              <div className="container-btn">
                <CountBtn />
              </div>
              <button className="btn btn-shop" data-id={product.id}>
                <FontAwesomeIcon icon={faShoppingCart} />
                Agregar al Carrito
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

