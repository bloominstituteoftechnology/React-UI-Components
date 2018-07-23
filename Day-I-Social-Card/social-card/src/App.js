import React from 'react';
import './App.css';
import './components/CardComponents/Card.css';
import './components/HeaderComponents/Header.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
const App = () => {
  return (
    <div class='main-content'>
      <HeaderContainer />
      <CardContainer/>
    </div>
  );
};

export default App;
