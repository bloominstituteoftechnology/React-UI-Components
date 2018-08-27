import React from 'react';
import './App.css';
import './components/HeaderComponents/Header.css';
import './components/CardComponents/Card.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'; 
import CardContainer from './components/CardComponents/CardContainer'; 

const App = () => {
  return (
    <div className="main-container">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
