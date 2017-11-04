import React, { Component } from 'react';
import './ItemPreview.css';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { images } = this.props;
    return (
      <div className="Carousel">
        <div className="primaryImage">
          <img src={images[0].PrimaryImage[0].image} alt="" />
        </div>
        <div className="carousel">carousel</div>
      </div>
    );
  }
}
