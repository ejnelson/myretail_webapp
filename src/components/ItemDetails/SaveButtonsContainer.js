import React, { Component } from 'react';
import SaveButton from '../Shared/SaveButton';
import './ItemDetails.css';

export default class SaveButtonsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  addToRegistry = () => console.log('addToRegistry');
  addToList = () => console.log('addToList');
  share = () => console.log('share');

  render() {
    return (
      <div className="saveButtonsContainer">
        <SaveButton
          action={() => this.addToRegistry()}
          buttonText="ADD TO REGISTRY"
        />
        <SaveButton action={() => this.addToList()} buttonText="ADD TO LIST" />
        <SaveButton action={() => this.save()} buttonText="SHARE" />
      </div>
    );
  }
}
