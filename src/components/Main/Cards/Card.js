import React, { Component } from "react";

export default class Card extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
    };
  }

    handleUp = () =>{
      this.setState({
        count: this.state.count + 1
      })
    }

    handleDow = () => {
      this.setState({
        count: this.state.count + -1
      })
    }

    
 
  render() {
    return (
      <div className="container-cards">
        {this.props.items.map((product) => {
          return (
            <div className="card" key={product.id} style={{backgroundImage: `url(${product.img})`}}>
              <div className="content-card">
                <h2 className="title">{product.title}</h2>
                <p className="copy">{product.desc}</p>
                <p className="copy">{product.price}</p>
                <div className="container-btn">
                  <button className="btn" onClick={this.handleUp}>+</button>
                  <span className="count">{this.state.count}</span>
                  <button className="btn" onClick={this.handleDow}>-</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
