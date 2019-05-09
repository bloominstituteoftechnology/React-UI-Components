import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'
import Footer from './components/FooterComponents/Footer'
import './App.css';

const App = () => {
  return (
    <div className = 'app'>
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
