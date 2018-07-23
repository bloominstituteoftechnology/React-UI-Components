import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';

const App = () => {
  return (
    <div className ="socialApp">
    
      <HeaderContainer /> 
      <CardContainer />
      <Footer />
    </div>
    
  );
};






export default App;

