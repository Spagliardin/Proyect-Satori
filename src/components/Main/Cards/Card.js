import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="content-card">
          <h2 className="title">Campera Invierno</h2>
          <p className="copy">Campera de pluma invierno 2021 - $4500</p>
          <div className="container-btn">
            <button className="btn">+</button>
            <button className="btn">-</button>
          </div>
        </div>
      </div>
    );
  }
}
