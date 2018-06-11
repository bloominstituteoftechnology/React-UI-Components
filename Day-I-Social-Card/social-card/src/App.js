import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import HeaderTitle from './components/HeaderComponents/HeaderTitle'
import HeaderContent from './components/HeaderComponents/HeaderContent'
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail'


import CardContainer from './components/CardComponents/CardContainer'
import CardBanner from './components/CardComponents/CardBanner'
import CardContent from './components/CardComponents/CardContent'



const App = () => {
  return (
    <div>
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
