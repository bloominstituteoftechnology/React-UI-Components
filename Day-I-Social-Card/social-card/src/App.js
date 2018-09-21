import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import BannerContainer from './components/CardComponents/CardContainer'
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="main-body">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};


export default App;
