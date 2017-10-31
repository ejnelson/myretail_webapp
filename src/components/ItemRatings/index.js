import React from 'react';
import OverallRatings from './OverallRatings';
import ProConRatings from './ProConRatings';
import './ItemRatings.css';

const ItemRatings = () => (
  <div className="ItemRatings">
    <OverallRatings />
    <ProConRatings />
  </div>
);

export default ItemRatings;
