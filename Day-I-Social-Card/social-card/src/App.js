import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/HeaderContainer';
import CardBody from './components/CardComponents/CardContainer';
import CardFooter from './components/FooterComponents/Footer';
const App = () => {
  return (
    <div className='container'>
      <Header />
      <CardBody />
      <CardFooter />
    </div>
  );
};

export default App;
