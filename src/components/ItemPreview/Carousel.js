import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ItemPreview.css';
import '../../external/elusive-icons-2.0.0/css/elusive-icons.min.css';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: this.props.imagesObject.PrimaryImage[0].image,
      carouselPosition: 0
    };
  }

  selectImage = (imgSource) => {
    this.setState({ selectedImage: imgSource });
  };
  nextImageLeft = () => {
    console.log(this.state.carouselPosition);
    if (this.state.carouselPosition < 0) {
      this.setState(prevState => ({
        carouselPosition: prevState.carouselPosition + 75
      }));
    }
  };
  nextImageRight = () => {
    if (
      this.state.carouselPosition >
      (this.props.imagesObject.AlternateImages.length - 2) * -75
    ) {
      this.setState(prevState => ({
        carouselPosition: prevState.carouselPosition - 75
      }));
    }
  };

  render() {
    const { imagesObject } = this.props;

    return (
      <div className="Carousel">
        <div>
          <img
            className="selectedImage"
            src={this.state.selectedImage}
            alt=""
          />
        </div>

        <span className="zoom">
          <i className="el el-zoom-in el-2x" />
          <p className="zoomText">view larger</p>
        </span>
        <div className="selectorContainer">
          <button onClick={() => this.nextImageLeft()}>
            <i className="el el-chevron-left arrow" />
          </button>
          <div className="carouselSelectorActuator">
            <ul
              className="carouselSelector"
              style={{
                left: `${this.state.carouselPosition}px`
              }}
            >
              <li>
                <button
                  onClick={() =>
                    this.selectImage(imagesObject.PrimaryImage[0].image)}
                >
                  <img
                    className="thumbnail"
                    src={imagesObject.PrimaryImage[0].image}
                    alt=""
                  />
                </button>
              </li>
              {imagesObject.AlternateImages.map((img, idx) => (
                <li key={idx}>
                  <button onClick={() => this.selectImage(img.image)}>
                    <img className="thumbnail" src={img.image} alt="" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={() => this.nextImageRight()}>
            <i className="el el-chevron-right arrow" />
          </button>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  imagesObject: PropTypes.shape({
    PrimaryImage: PropTypes.arrayOf(PropTypes.object),
    AlternateImages: PropTypes.arrayOf(PropTypes.object)
  })
};

Carousel.defaultProps = {
  imagesObject: {}
};
