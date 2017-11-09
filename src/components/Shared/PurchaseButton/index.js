import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PurchaseButton.css';

export default class PurchaseButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonText, buttonColor, action, subText } = this.props;
    return (
      <div className="buttonContainer">
        <button
          className="purchaseButton"
          onClick={action}
          style={{
            backgroundColor: `${buttonColor}`,
            borderColor: `${buttonColor}`
          }}
        >
          {buttonText}
        </button>
        <p className="subText">{subText}</p>
      </div>
    );
  }
}

PurchaseButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  subText: PropTypes.string
};

PurchaseButton.defaultProps = {};
