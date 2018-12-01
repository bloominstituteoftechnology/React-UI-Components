import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import FooterContainer from './components/FooterComponents/Footer';


const App = () => {
  return (
    <div>
      <div className="body-container container">
        <HeaderContainer />
        <CardContainer />
      </div>
      <div className="footer-container">
        <div className="container">
        <FooterContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
