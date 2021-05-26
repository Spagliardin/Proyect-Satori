import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./views/Home/Home";
import { Shirts } from "./views/Shirts/Shirts";
import { Tshirts } from "./views/Tshirts/Tshirts";
import { Pants } from "./views/Pants/Pants";
import { Contact } from "./views/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shirts">
            <Shirts />
          </Route>
          <Route path="/t-shirts">
            <Tshirts />
          </Route>
          <Route path="/pants">
            <Pants />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
