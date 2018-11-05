import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer';
import './App.css';



const App = () => {
  return (
    <React.Fragment>
      <HeaderContainer />
      <CardContainer />
    </React.Fragment>  
  );
};

export default App;
