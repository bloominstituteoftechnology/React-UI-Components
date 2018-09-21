import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer'

let d = new Date();
const App = (props) => {
  return (
    <div className="app">
      <HeaderContainer day = {d}/>
      <CardContainer/>
    </div>
  );
};

export default App;
