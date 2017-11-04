import React, { Component } from 'react';
import './ItemPreview.css';

export default class TitleDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title } = this.props;
    return <div className="TitleDisplay">{title}</div>;
  }
}
