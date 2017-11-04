import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ItemDetails.css';

export default class PriceDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { priceObject } = this.props;
    return (
      <div className="PriceDisplay">
        <h2>{priceObject.formattedPriceValue}</h2>
        <p>{priceObject.priceQualifier}</p>
      </div>
    );
  }
}

PriceDisplay.propTypes = {
  priceObject: PropTypes.shape({
    currencyCode: PropTypes.string,
    formattedPriceValue: PropTypes.string,
    priceQualifier: PropTypes.string,
    priceValue: PropTypes.string
  })
};

PriceDisplay.defaultProps = {
  priceObject: {}
};
