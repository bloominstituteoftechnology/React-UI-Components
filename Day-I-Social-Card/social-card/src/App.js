import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';

const App = () => {
  return (
    <div className="app-wrap">
      <div className="content-wrap">
        <HeaderContainer />
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
