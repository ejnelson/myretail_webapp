import React, { Component } from 'react';
import PriceDisplay from './PriceDisplay';
import PromotionsDisplay from './PromotionsDisplay';
import QuantitySelector from './QuantitySelector';
import HighlightsDisplay from './HighlightsDisplay';
import PurchaseButtonsContainer from './PurchaseButtonsContainer';
import SaveButtonsContainer from './SaveButtonsContainer';
import ReturnsDisplay from './ReturnsDisplay';
import './ItemDetails.css';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { itemData } = this.props;
    return (
      <div className="ItemDetails">
        <PriceDisplay
          priceObject={itemData.CatalogEntryView[0].Offers[0].OfferPrice[0]}
        />
        <PromotionsDisplay
          promotionsArray={itemData.CatalogEntryView[0].Promotions}
        />
        <QuantitySelector />
        <PurchaseButtonsContainer
          purchasingChannelCode={
            itemData.CatalogEntryView[0].purchasingChannelCode
          }
        />
        <ReturnsDisplay
          returnDetailsObject={itemData.CatalogEntryView[0].ReturnPolicy[0]}
        />
        <SaveButtonsContainer />
        <HighlightsDisplay
          highlightsArray={
            itemData.CatalogEntryView[0].ItemDescription[0].features
          }
        />
      </div>
    );
  }
}
