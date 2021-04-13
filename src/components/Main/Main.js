import React, { Component } from "react";
import Cards from "./Cards/Card";
import Product from "../Data/dataProduct";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };

    setTimeout(() =>{
        this.setState({
            items: Product,
        })
    },2000)

  }
  render() {
    return (
      <div className="container-cards">
        <Cards
        items={this.state.items} />
      </div>
    );
  }
}
