import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import MyHeader from './components/HeaderComponents/HeaderContainer';

const App = () => {
  return (
    <div>
      <MyHeader />
      <CardContainer />
    </div>
  );
};

export default App;
