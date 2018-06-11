import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";



const App = () => {
  return (
    <div>
      <HeaderContainer/>
      <CardContainer />
    </div>

  ); 
};

export default App;
