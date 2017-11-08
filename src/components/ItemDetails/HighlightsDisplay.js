import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ItemDetails.css';

export default class HighlightsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { highlightsArray } = this.props;
    return (
      <div className="HighlightsDisplay">
        <h1>product highlights</h1>
        <ul>
          {highlightsArray.map((highlight, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: highlight }} />
          ))}
        </ul>
      </div>
    );
  }
}

HighlightsDisplay.propTypes = {
  highlightsArray: PropTypes.arrayOf(PropTypes.string)
};

HighlightsDisplay.defaultProps = {
  highlightsArray: []
};
