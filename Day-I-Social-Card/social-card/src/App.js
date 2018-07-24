import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';

const App = () => {
  return (
    <div className="container">  
      <HeaderContainer />
      <CardContainer/>
    </div>


    
  );
};

export default App;
