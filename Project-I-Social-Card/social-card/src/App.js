import React from 'react';
import './App.css';
import Headercontainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className = "App">
      <Headercontainer/>
      <CardContainer/>
      <Footer/>
    </div>
  );
};

export default App;
