import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import FooterContainer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div class="wrapper">
      <HeaderContainer />
      <CardContainer />
      <FooterContainer />
     
    </div>
  );
};

export default App;
