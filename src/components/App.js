import React from 'react';
import ItemPreview from './ItemPreview';
import ItemDetails from './ItemDetails';
import ItemRatings from './ItemRatings';
import itemData from '../item-data.json';
import './App.css';

const App = () => (
  <div className="App">
    <ItemPreview itemData={itemData} />
    <ItemDetails itemData={itemData} />
    <ItemRatings itemData={itemData} />
  </div>
);

export default App;
