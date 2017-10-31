import React from 'react';
import ItemPreview from './ItemPreview';
import ItemDetails from './ItemDetails';
import ItemRatings from './ItemRatings';
import './App.css';

const App = () => (
  <div className="App">
    <ItemPreview />
    <ItemDetails />
    <ItemRatings />
  </div>
);

export default App;
