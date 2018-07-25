import React from 'react';
import './App.css';
import './components/CardComponents/Card.css';
import './components/HeaderComponents/Header.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import IconContainer from './components/FooterComponents/Footer.js';
const App = () => {
  return (
    <div className='main-content'>
      <HeaderContainer />
      <CardContainer />
      <IconContainer />
    </div>
  );
};

export default App;
