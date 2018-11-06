import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';

const App = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <CardContainer />
    </React.Fragment>
  );
};

export default App;
