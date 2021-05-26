// icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import logo from "./logoSatori1.png";

import { Hamburguer } from "../Hamburguer/Hamburguer";

library.add(faShoppingBag);

export const MainMenu = (props) => {

  const countCartItems = props;
  const iconBag = <FontAwesomeIcon icon={faShoppingBag} size="3x" />;

  return (
    <header className="content">
      <Hamburguer />
      <div className="content-Image">
        <img src={logo} alt="Logo" />
      </div>
      <div
        className="shopping-bag"
        onClick={() => {
          document
            .querySelector(".cart-Holder")
            .classList.toggle("cart-Holder-Open");
        }}
      >
        {iconBag}
          {(
            <span className="count">{Object.values(countCartItems.countCartItems)}</span>
          )}
      </div>
    </header>
  );
};
