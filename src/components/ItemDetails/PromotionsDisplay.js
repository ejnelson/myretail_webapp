import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ItemDetails.css';

export default class PromotionDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { promotionsArray } = this.props;
    return (
      <div className="PromotionsDisplay">
        <ul className="el-ul">
          {promotionsArray.map((promotion, idx) => (
            <li key={idx}>
              <i className="el-li el el-tag" />
              {promotion.Description[0].shortDescription}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

PromotionDisplay.propTypes = {
  promotionsArray: PropTypes.arrayOf(PropTypes.object)
};

PromotionDisplay.defaultProps = {
  promotionsArray: []
};
