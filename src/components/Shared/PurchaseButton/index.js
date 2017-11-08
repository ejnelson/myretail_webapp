import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PurchaseButton.css';

export default class PurchaseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <button>do something</button>;
  }
}

PurchaseButton.propTypes = {
  highlightsArray: PropTypes.arrayOf(PropTypes.string)
};

PurchaseButton.defaultProps = {
  highlightsArray: []
};
