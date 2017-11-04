import React, { Component } from 'react';
import './ItemRatings.css';

export default class OverallRatings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { overallRating, totalReviews } = this.props;
    return (
      <div className="OverallRatings">
        <p>{overallRating} out of 5</p>
        <p>view all {totalReviews} reviews </p>
      </div>
    );
  }
}
