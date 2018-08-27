import React from 'react';
import './App.css';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div id="app">
      <ImageThumbnail />
      <main>
        <HeaderContainer />
        <CardContainer />
      </main>
    </div>
  );
};

export default App;
