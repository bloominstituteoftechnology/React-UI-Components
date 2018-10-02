import React from 'react';
import './App.css';
import './components/CardComponents/Card.css'
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import moment from 'moment';

const App = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <CardContainer />
     
    </div>
  );
};



export default App;
