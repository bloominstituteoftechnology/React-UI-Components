import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';

import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div>
      <header>
      <HeaderTitle />
      <HeaderContainer />
      <HeaderContent />
      </header>
      <CardContainer />
    </div>
  );
};

export default App;
