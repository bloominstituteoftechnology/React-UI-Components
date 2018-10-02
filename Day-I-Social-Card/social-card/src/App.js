import React from 'react';
import './App.css';
// import './components/HeaderComponents/HeaderContainer'
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="cta">
      <HeaderContainer />
      <CardContainer />
      
    </div>
  )
}

export default App;
