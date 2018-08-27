import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';

const App = () => (
  <div class = 'container-app'>
    <HeaderContainer />
    <CardContainer />
  </div>
);

export default App;
