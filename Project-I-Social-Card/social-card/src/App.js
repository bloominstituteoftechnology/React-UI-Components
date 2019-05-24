import React from 'react';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import './App.css';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import CardBanner from './components/CardComponents/CardBanner';
import Button from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div>
      <ImageThumbnail />
      <HeaderTitle title='This is Just Spoken Codes' />
      <HeaderContent />
      <CardBanner />
      <Button />
    </div>
  );
};

export default App;
