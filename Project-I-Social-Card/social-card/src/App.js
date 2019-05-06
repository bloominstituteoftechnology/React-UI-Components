import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer.js';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';

const App = () => {
  return (
    <div className="app-container">
      <HeaderContainer />
      <CardContainer />

    </div>
  );
};

export default App;
