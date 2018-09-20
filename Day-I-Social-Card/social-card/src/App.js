import React from 'react';
import './App.css';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';

const App = () => {
  return (
    <div className="app">
      <div className="col-left">
        <ImageThumbnail />
      </div>
      <div className="col-main">
        <HeaderContainer />
      </div>
    </div>
  );
};

export default App;
