import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import lambdaLogo from './assets/lambdalogo.jpg';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
const App = () => {
  console.log(lambdaLogo);
  return (
    <div>
      <HeaderContainer lambdaLogo={lambdaLogo} altText="lambda-logo"/>
      <CardContainer  />
      <Footer />
    </div>
  );
};

export default App;
