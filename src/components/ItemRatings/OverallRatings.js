import React, { Component } from 'react';
import './ItemRatings.css';

export default class OverallRatings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { overallRating, totalReviews } = this.props;
    const starArray = [];
    for (let i = 0; i < 5; i += 1) {
      if (i < overallRating) {
        starArray.push('red');
      } else {
        starArray.push('grey');
      }
    }
    return (
      <div className="OverallRatings">
        <div className="starContainer">
          {starArray.map((color, index) => (
            <i className={`el el-star ${color}`} key={index} />
          ))}
          <p className="overallText">overall</p>
        </div>
        <p className="viewallText">view all {totalReviews} reviews </p>
      </div>
    );
  }
}
