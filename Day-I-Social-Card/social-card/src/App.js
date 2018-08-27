import React from 'react';
import './App.css';
import Container from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer'

const App = () => {
  return (
    <div>
      <div className="header">
        <Container />
      </div>
      <div className="card" >
        <CardContainer />
      </div>
      
    </div>
    
  );
};

export default App;
