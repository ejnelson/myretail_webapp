import React, { Component } from 'react';
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
        <h1>Product Highlights</h1>
        <ul>
          {highlightsArray.map((highlight, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: highlight }} />
          ))}
        </ul>
      </div>
    );
  }
}
