import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer';
import Card from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="mainApp">
      <Header />
      <a href="https://www.reactjs.org"><Card /></a>
    </div>
  );
};

export default App;
