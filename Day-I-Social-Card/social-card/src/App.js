import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className='container'>
      <HeaderContainer />
      <a href="https://www.reactjs.org" className='emailLink'><CardContainer /></a>
      {/* 
      
      <FooterContainer /> */}
    </div>
  );
};

export default App;
