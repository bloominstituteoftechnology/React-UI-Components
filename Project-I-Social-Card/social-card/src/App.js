import React from 'react';
import './App.css';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail'
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className = "app">
      <div className = "logo">
        <ImageThumbnail />
      </div>
      <div>
        <HeaderContainer />
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
