import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FullMenu from "./FullMenu/FullMenu";
import Hamburguer from "./Hamburguer/Hamburguer";
import MainMenu from "./MainMenu/MainMenu";

// import {Home} from '../../views/Home/Home';
// import {Shirts} from '../../views/Shirts/Shirts';
// import {Tshirts} from '../../views/Tshirts/Tshirts';
// import {Pants} from '../../views/Pants/Pants';
// import {Contact} from '../../views/Contact/Contact';


export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <FullMenu />
          {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shirts" exact component={Shirts} />
            <Route path="/tshirts" component={Tshirts} />
            <Route path="/pants" component={Pants} />
            <Route path="/contact" component={Contact} />
          </Switch> */}
          <Hamburguer />
          <MainMenu />
        </div>
      </Router>
    );
  }
}
