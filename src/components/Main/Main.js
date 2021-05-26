import { Cards } from "./Cards/Card";

//context
import { ProductContext } from "../../Contexts/ItemsContext";

import React, { useContext } from "react";

export const Main = (props) => {
  const { onAdd } = props;

  const value = useContext(ProductContext);

  return (
    <div>
      <div className="container-cards">
        <Cards items={value} onAdd={onAdd}/>
      </div>
    </div>
  );
};
