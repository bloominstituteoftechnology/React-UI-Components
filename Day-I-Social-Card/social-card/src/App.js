import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <a href="https://www.reactjs.org" target="_blank">
        <CardContainer />
      </a>
    </div>
  );
};

export default App;
