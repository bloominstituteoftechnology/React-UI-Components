import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import './App.css';



const App = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <CardContainer />
      <Footer/>
    </React.Fragment>  
  );
};

export default App;
