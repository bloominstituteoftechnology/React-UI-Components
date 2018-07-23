import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <section className="main-container">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </section>
  );
};

export default App;
