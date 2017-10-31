import React from 'react';
import Carousel from './Carousel';
import TitleDisplay from './TitleDisplay';
import './ItemPreview.css';

const ItemPreview = () => (
  <div className="ItemPreview">
    <TitleDisplay />
    <Carousel />
  </div>
);
export default ItemPreview;
