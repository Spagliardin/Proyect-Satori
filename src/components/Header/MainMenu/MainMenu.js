// icons from font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import logo from "./logoSatori1.png";

import { Hamburguer } from "../Hamburguer/Hamburguer";
import { CartHolder } from "../CartHolder/CartHolder";

library.add(faShoppingBag);

const MainMenu = () => {
  
  const iconBag = <FontAwesomeIcon icon={faShoppingBag} size="3x" />;

  return (
    <header className="content">
      <Hamburguer />
      <div className="content-Image">
        <img src={logo} alt="Logo" />
      </div>
      <div className="shopping-bag" onClick={() => {
        document.querySelector('.cart-Holder').classList.toggle('cart-Holder-Open')
      }}>
        {iconBag}
        <span className="count">0</span>
      </div>
      <CartHolder />
    </header>
  );
};

export default MainMenu;
