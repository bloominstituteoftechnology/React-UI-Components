import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import CardBanner from './components/CardComponents/CardBanner';
import HeadContainer from './components/HeaderComponents/HeaderContainer';

const App = () => {
  return (
    <div className="card-container">
        <HeadContainer/>

        <CardBanner/>

    </div>
  );
};

export default App;
