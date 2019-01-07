import React from 'react';
import './App.css';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail.js';
import HeaderTitle from './components/HeaderComponents/HeaderTitle.js';
import HeaderContent from './components/HeaderComponents/HeaderContent.js';

const App = () => {
  return (
    <div className="container">
      <ImageThumbnail/>
      <HeaderTitle/>
      <HeaderContent/>
    </div>
  );
};

export default App;
