import React, { Component } from 'react';
import Carousel from './Carousel';
import TitleDisplay from './TitleDisplay';
import './ItemPreview.css';

export default class ItemPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { itemData } = this.props;
    console.log('item details', this.props);
    return (
      <div className="ItemPreview">
        <TitleDisplay title={itemData.CatalogEntryView[0].title} />
        <Carousel images={itemData.CatalogEntryView[0].Images} />
      </div>
    );
  }
}
