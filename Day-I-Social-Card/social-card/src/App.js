import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer';
import Footer from './components/FooterComponents/Footer';
import Card from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div class="app-container">
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
