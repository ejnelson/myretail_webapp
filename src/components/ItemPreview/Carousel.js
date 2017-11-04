import React, { Component } from 'react';
import './ItemPreview.css';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { imagesObject } = this.props;
    return (
      <div className="Carousel">
        <div className="primaryImage">
          <img src={imagesObject[0].PrimaryImage[0].image} alt="" />
        </div>
        <div className="carousel">carousel</div>
      </div>
    );
  }
}
