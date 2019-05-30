import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer';
import Card from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="mainApp">
      <Header />
      <a href="https://www.reactjs.org"><Card /></a>
      <Footer />
    </div>
  );
};

export default App;
