import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';
import FooterContainer from './components/FooterComponents/FooterContainer.js';

const App = () => {
  return (
    <div className="social-card">
      <HeaderContainer />
      <CardContainer />
      <FooterContainer />
    </div>
  );
};

export default App;
