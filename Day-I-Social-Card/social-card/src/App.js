import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import FooterContainer from './components/FooterComponents/FooterContainer';

const App = () => {
  return (
    <section className="card">
      <HeaderContainer />
      <CardContainer />
      <FooterContainer />
    </section>
  );
};

export default App;
