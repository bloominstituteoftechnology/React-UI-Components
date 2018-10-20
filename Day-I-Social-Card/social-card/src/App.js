import React from 'react';
import './App.css';
import './components/HeaderComponents/Header.css';
import './components/CardComponents/Card.css';
import './components/FooterComponents/Footer.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';
import Footer from './components/FooterComponents/Footer.js';

const App = () => {
  return (
    <div id="root">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
