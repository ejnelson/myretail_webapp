import React from 'react';
import PriceDisplay from './PriceDisplay';
import PromotionsDisplay from './PromotionsDisplay';
import QuantitySelector from './QuantitySelector';
import HighlightsDisplay from './HighlightsDisplay';
import PurchaseButtonsContainer from './PurchaseButtonsContainer';
import SaveButtonsContainer from './SaveButtonsContainer';
import ReturnsDisplay from './ReturnsDisplay';
import './ItemDetails.css';

const ItemDetails = () => (
  <div className="ItemDetails">
    <PriceDisplay />
    <PromotionsDisplay />
    <QuantitySelector />
    <PurchaseButtonsContainer />
    <ReturnsDisplay />
    <SaveButtonsContainer />
    <HighlightsDisplay />
  </div>
);

export default ItemDetails;
