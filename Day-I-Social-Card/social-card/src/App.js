import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="app">
      <HeaderContainer />
      {/* <ImageThumbnail /> */}
      <CardContainer />
    </div>
  );
};

export default App;
