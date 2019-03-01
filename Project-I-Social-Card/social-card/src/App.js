import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'
import click from './components/CardComponents/CardContainer'

const App = () => {
  return (
    
      <div className="App">
    
     <HeaderContainer />
     <CardContainer onClick={this.click} />
      </div>
   
  );
};

export default App;
