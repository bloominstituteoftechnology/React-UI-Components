import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer'
import './App.css';

const App = () => {
  return (
    <div className='grid-container'>
      <div className="header">
        <HeaderContainer />
      </div>
      <div className="card">
        <CardContainer />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
