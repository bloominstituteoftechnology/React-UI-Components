import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import './App.css';

const App = (props) => {
  return (
    <div className = "app-container">
      <HeaderContainer/>
      <a href="https://www.reactjs.org"><CardContainer/></a>
    </div>
  );
};

export default App;

