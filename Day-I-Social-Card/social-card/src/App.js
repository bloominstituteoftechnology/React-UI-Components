import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer';
import CardBody from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <CardBody />
    </div>
  );
};

export default App;
