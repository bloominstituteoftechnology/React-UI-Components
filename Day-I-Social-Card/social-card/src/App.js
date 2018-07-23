import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';

const App = () => {
  return (
    <div onClick ={handleClick}className ="socialApp">
    
      <HeaderContainer /> 
      <CardContainer />
      <Footer />
    </div>
    
  );
};


function handleClick () {
  window.open('https://www.reactjs.org');
}

export default App;

