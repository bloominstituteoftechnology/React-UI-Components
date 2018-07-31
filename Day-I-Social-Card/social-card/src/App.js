import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'


const App = () => {
  return (
   
    <div>
      <h3>Welcome to React Social Card!</h3>
      
        <HeaderContainer />
        <CardContainer />
      
    </div>
    
  );
};

export default App;
