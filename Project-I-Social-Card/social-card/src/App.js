import React from 'react';
import './App.css';
import Headercontainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className = "App">
      <Headercontainer/>
      <CardContainer/>
    </div>
  );
};

export default App;
