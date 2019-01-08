import React from 'react';
import './App.css';
import HeaderContainer from  './components/HeaderComponents/HeaderContainer.js';
import CardContainer from  './components/CardComponents/CardContainer.js';
import LikeButton from  './components/ButtonComponents/LikeButton.js';
const App = () => {
  return (
    <div className="app">
     <HeaderContainer />
     <CardContainer />
     <LikeButton />
    </div>
  );
};

export default App;
