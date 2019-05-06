import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="card-container">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
