import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PurchaseButton from '../Shared/PurchaseButton';
import './ItemDetails.css';

export default class PurchaseButtonsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  pickUpInStore = () => console.log('pick up in store');
  addToCart = () => console.log('add to cart');

  render() {
    const { purchasingChannelCode } = this.props;
    return (
      <div className="purchaseButtonContainer">
        {purchasingChannelCode == 0 || purchasingChannelCode == 2 ? (
          <PurchaseButton
            action={() => this.pickUpInStore()}
            buttonText="PICK UP IN STORE"
            buttonColor="black"
            subText="find in a store"
          />
        ) : null}
        {purchasingChannelCode == 0 || purchasingChannelCode == 1 ? (
          <PurchaseButton
            action={() => this.addToCart()}
            buttonText="ADD TO CART"
            buttonColor="rgb(200, 0, 0)"
          />
        ) : null}
      </div>
    );
  }
}

PurchaseButtonsContainer.propTypes = {
  purchasingChannelCode: PropTypes.number
};

PurchaseButtonsContainer.defaultProps = {
  purchasingChannelCode: 0
};
