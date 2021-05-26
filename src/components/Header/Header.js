import { FullMenu } from "./FullMenu/FullMenu";
import { MainMenu } from "./MainMenu/MainMenu";

import React from "react";

export const Header = (props) => {
  const countCartItems = props;

  return (
    <div>
      <FullMenu />
      <MainMenu countCartItems={countCartItems} />
    </div>
  );
};
