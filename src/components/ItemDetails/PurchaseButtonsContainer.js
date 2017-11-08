import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PurchaseButton from '../Shared/PurchaseButton';
import './ItemDetails.css';

export default class PurchaseButtonsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  pickUpInStore = () => 200;
  addToCart = () => 100;

  render() {
    return (
      <div>
        <PurchaseButton handleClick={() => this.pickUpInStore()} />
        <PurchaseButton handleClick={() => this.addToCart()} />
      </div>
    );
  }
}

PurchaseButtonsContainer.propTypes = {
  highlightsArray: PropTypes.arrayOf(PropTypes.string)
};

PurchaseButtonsContainer.defaultProps = {
  highlightsArray: []
};
