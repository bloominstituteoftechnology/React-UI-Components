import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import './App.css';

const App = () => {
  return (
    <section className='cardContainer'>
      <HeaderContainer />
      <CardContainer />
    </section>
  )
};

export default App;