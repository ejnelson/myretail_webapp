import React, { Component } from 'react';
import OverallRatings from './OverallRatings';
import ProConRatings from './ProConRatings';
import './ItemRatings.css';

export default class ItemRatings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { itemData } = this.props;
    return (
      <div className="ItemRatings">
        <OverallRatings
          overallRating={
            itemData.CatalogEntryView[0].CustomerReview[0]
              .consolidatedOverallRating
          }
          totalReviews={
            itemData.CatalogEntryView[0].CustomerReview[0].totalReviews
          }
        />
        <ProConRatings
          proRatingObject={
            itemData.CatalogEntryView[0].CustomerReview[0].Pro[0]
          }
          conRatingObject={
            itemData.CatalogEntryView[0].CustomerReview[0].Con[0]
          }
        />
      </div>
    );
  }
}
