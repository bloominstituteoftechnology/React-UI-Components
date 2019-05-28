import React from 'react';
import './App.css';
import HeaderContainer from '../src/components/HeaderComponents/HeaderContainer';
import CardContainer from '../src/components/CardComponents/CardContainer'

const App = () => {
  return (
    <div className="app-container">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
