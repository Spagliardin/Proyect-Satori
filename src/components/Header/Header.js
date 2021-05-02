import React, { Component } from "react";

import FullMenu from "./FullMenu/FullMenu";
// import Hamburguer from "./Hamburguer/Hamburguer";
import MainMenu from "./MainMenu/MainMenu";

export default class Header extends Component {
  render() {
    return (
      <div>
        <FullMenu />
        <MainMenu />
      </div>
    );
  }
}
