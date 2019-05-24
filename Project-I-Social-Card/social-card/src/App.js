import React from 'react';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import './App.css';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import CardBanner from './components/CardComponents/CardBanner';

const App = () => {
  return (
    <div>
      <ImageThumbnail />
      <HeaderTitle title='This is Just Spoken Codes' />
      <p>
        <HeaderContent />
      </p>
     <CardBanner />
      <p>
        <strong>
      
        </strong>
      </p>
    </div>
  );
};

export default App;
