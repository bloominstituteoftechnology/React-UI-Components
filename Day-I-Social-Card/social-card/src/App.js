import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import MainImage from './components/HeaderComponents/ImageThumbnail';

const App = () => {
  return (
    <div class="mainDiv">
      <MainImage />
      <div>
        <HeaderContainer />
        <CardContainer />
      </div>
    </div>
  );
};

export default App;

