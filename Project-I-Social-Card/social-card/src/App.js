import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer'

const App = () => {
  return (    
  <div class = 'container'>
    <Header />
    <CardContainer/>
  </div>
  );
};

export default App;
