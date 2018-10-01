import React, { Fragment } from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <CardContainer />
    </Fragment>
  );
};

export default App;