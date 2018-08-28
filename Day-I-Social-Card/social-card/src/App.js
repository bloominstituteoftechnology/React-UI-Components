import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
// import CardBanner from './components/CardComponents/CardBanner';
import HeadContainer from './components/HeaderComponents/HeaderContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="card-container">
        <HeadContainer/>
        <CardContainer/>
        <Footer/>
    </div>
  );
};

export default App;
