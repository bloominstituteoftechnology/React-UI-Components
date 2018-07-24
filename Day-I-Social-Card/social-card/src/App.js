import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';


const App = () => {
  return (
  
    <div class="container">
    <HeaderContainer />
    <a href="https://www.reactjs.org"> <CardContainer /> </a>
    </div>
    
  );
};

export default App;
