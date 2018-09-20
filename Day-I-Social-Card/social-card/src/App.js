import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
