import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
const App = () => {
  return (
    <div>
      <header>
      <HeaderTitle />
      <HeaderContainer />
      <HeaderContent />
      </header>
      
    </div>
  );
};

export default App;
