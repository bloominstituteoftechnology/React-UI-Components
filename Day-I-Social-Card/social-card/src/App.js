import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import CardBanner from './components/CardComponents/CardBanner';
import CardContent from './components/CardComponents/CardContent';
import ImageThumbanil from './components/HeaderComponents/ImageThumbnail';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';

const App = () => {
  return (
    <div className="full-card">
      <HeaderContainer />
      <ImageThumbanil />
      <CardBanner />
      <CardContent />
      <CardContainer />
    </div >
  );
};

export default App;
