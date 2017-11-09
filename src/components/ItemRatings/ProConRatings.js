import React, { Component } from 'react';
import './ItemRatings.css';

export default class ProConRatings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { proRatingObject, conRatingObject } = this.props;
    const proStarArray = [];
    const conStarArray = [];
    for (let i = 0; i < 5; i += 1) {
      if (i < proRatingObject.overallRating) {
        proStarArray.push('red');
      } else {
        proStarArray.push('grey');
      }
    }
    for (let i = 0; i < 5; i += 1) {
      if (i < conRatingObject.overallRating) {
        conStarArray.push('red');
      } else {
        conStarArray.push('grey');
      }
    }
    const proDatePosted = new Date(proRatingObject.datePosted);
    const conDatePosted = new Date(conRatingObject.datePosted);

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
        <div className="proConBody">
          <div className="proBody">
            {proStarArray.map((color, index) => (
              <i className={`el el-star ${color}`} key={index} />
            ))}
            <h5>{proRatingObject.title}</h5>
            <p>{proRatingObject.review}</p>
            <span>
              <a href="#">{proRatingObject.screenName}</a>
            </span>
            <span>
              {`${proDatePosted.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}`}
            </span>
          </div>
          <div className="proBody">
            {conStarArray.map((color, index) => (
              <i className={`el el-star ${color}`} key={index} />
            ))}
            <h5>{conRatingObject.title}</h5>
            <p>{conRatingObject.review}</p>
            <span>
              <a href="#">{conRatingObject.screenName}</a>
            </span>
            <span>
              {`${conDatePosted.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}`}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
