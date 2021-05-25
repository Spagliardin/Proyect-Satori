import { Cards } from "./Cards/Card";

//context
import { ProductContext } from "../../Contexts/ItemsContext";

import React, { useContext } from "react";

export const Main = (props) => {
  const { cartItems, onAdd } = props;

  const value = useContext(ProductContext);

  return (
    <div>
      <div className="container-cards">
        <Cards cartItems={cartItems} items={value} onAdd={onAdd}/>
      </div>
    </div>
  );
};
