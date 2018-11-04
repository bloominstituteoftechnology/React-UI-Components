import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';

const App = () => {
  return (
    <div className='app'>
      <div className='heading'>
        <HeaderContainer />
      </div>
      <div className='card'>
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
