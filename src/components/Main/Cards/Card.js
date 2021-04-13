import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="container-cards">
        {this.props.items.map((product) => {
          return (
            <div className="card" key={product.id} style={{backgroundImage: `url(${product.img})`}}>
              <div className="content-card">
                <h2 className="title">{product.title}</h2>
                <p className="copy">{product.desc}</p>
                <div className="container-btn">
                  <button className="btn">+</button>
                  <button className="btn">-</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
