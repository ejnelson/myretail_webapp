import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ItemDetails.css';

export default class ReturnDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { returnDetailsObject } = this.props;
    return (
      <div className="ReturnsDisplay">
        <p className="returnsText">returns</p>
        <p className="returnsTerms">
          This item must be returned within 30 days of the ship date. See{' '}
          {<a href="#">return policy</a>} for details. Prices, promotions,
          styles and availability may vary by store and online.
        </p>
      </div>
    );
  }
}

// ReturnDisplay.propTypes = {
//   returnDetailsObject: PropTypes.shape({
//     ReturnPolicyDetails: PropTypes.array,
//     legalCopy: PropTypes.string
//   })
// };

// ReturnDisplay.defaultProps = {
//   returnDetailsObject: {}
// };
