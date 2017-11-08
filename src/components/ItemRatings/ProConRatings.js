import React, { Component } from 'react';
import './ItemRatings.css';

export default class ProConRatings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { proRatingObject, conRatingObject } = this.props;
    return (
      <div className="ProConRatings">
        <div className="proConHeader">
          <div className="proHeader">
            <h4>PRO</h4>
            <h6>most helpful 4-5 star review</h6>
          </div>
          <div className="conHeader">
            <h4>CON</h4>
            <h6>most helpful 1-2 star review</h6>
          </div>
        </div>
        <p>{proRatingObject.review}</p>
        <p>{conRatingObject.review}</p>
      </div>
    );
  }
}
