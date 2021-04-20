import React, { Component } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {Home} from './views/Home/Home';
import {Shirts} from './views/Shirts/Shirts';
import {Tshirts} from './views/Tshirts/Tshirts';
import {Pants} from './views/Pants/Pants';
import {Contact} from './views/Contact/Contact';




export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
     
      <div>
         <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shirts" exact component={Shirts} />
            <Route path="/tshirts" component={Tshirts} />
            <Route path="/pants" component={Pants} />
            <Route path="/contact" component={Contact} />
          </Switch>
          </Router>
        <Main />
      </div>
    )
  }
}
