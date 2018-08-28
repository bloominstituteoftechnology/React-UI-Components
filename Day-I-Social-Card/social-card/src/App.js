import React from 'react';

import './App.css';
import './components/HeaderComponents/Header.css';
import './components/CardComponents/Card.css';
import './components/FooterComponents/Footer.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer'; 
import CardContainer from './components/CardComponents/CardContainer'; 
import FooterContainer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="main-container">
     <a href="https://www.reactjs.org">
      <HeaderContainer />
      <CardContainer />
      <FooterContainer />
     </a>
    </div>
  );
};

export default App;
