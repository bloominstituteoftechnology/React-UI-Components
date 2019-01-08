import React from 'react';
import './App.css';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail.js';
import HeaderTitle from './components/HeaderComponents/HeaderTitle.js';
import HeaderContent from './components/HeaderComponents/HeaderContent.js';
import CardBanner from './components/CardComponents/CardBanner.js';
import CardContent from './components/CardComponents/CardContent.js';

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="heading">
          <div>
            <ImageThumbnail/>
          </div>
          <div className="header-text">
            <HeaderTitle/>
            <HeaderContent/>
          </div>
        </div>
      </div>
      <div className="card">
        <CardBanner/>
        <CardContent/>
      </div>
    </div>

  );
};

export default App;
