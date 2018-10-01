import React from 'react';
import './App.css';
import HeaderContainer from './calculator/src/components/HeaderComponents/HeaderContainer'
import CardContainer from './calculator/src/components/CardComponents/CardContainer'


const App = () => {
  return (
    <div className="appcontainer">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
