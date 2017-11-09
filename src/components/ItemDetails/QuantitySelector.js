import React, { Component } from 'react';
import './ItemDetails.css';

export default class QuantitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
  }
  increment = () =>
    this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
  decrement = () => {
    if (this.state.quantity > 1) {
      this.setState(prevState => ({ quantity: prevState.quantity - 1 }));
    }
  };

  render() {
    return (
      <div className="QuantitySelector">
        quantity:
        <div className="plusMinus">
          <i
            className="el el-minus-sign decrement"
            onClick={() => this.decrement()}
          />
          <p className="quantity">{this.state.quantity}</p>
          <i
            className="el el-plus-sign increment"
            onClick={() => this.increment()}
          />
        </div>
      </div>
    );
  }
}
