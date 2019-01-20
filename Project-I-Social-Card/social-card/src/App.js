import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import Header from './components/HeaderComponents/HeaderContainer';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
