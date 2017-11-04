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
        <p>{proRatingObject.review}</p>
        <p>{conRatingObject.review}</p>
      </div>
    );
  }
}
