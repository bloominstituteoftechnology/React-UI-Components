import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import MyHeader from './components/HeaderComponents/HeaderContainer';
import MyFooter from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div>
      <MyHeader />
      <CardContainer />
      <MyFooter />
    </div>
  );
};

export default App;