import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SaveButton.css';

export default class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonText, action } = this.props;
    return (
      <button className="saveButton" onClick={action}>
        {buttonText}
      </button>
    );
  }
}
