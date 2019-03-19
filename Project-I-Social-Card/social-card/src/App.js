import React from 'react';
import './App.css';
import HeaderContainer from "./components/HeaderComponents/HeaderContainer"
import CardContainer from "./components/CardComponents/CardContainer"

const App = () => {
  return (
    <div className = 'main-card'>
    <div className = 'main-container'>
      <HeaderContainer/>
     <CardContainer />
    </div>
    </div>
  );
};

export default App;
