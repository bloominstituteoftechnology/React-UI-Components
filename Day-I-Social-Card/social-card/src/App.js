import React, { Fragment } from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </Fragment>
  );
};

export default App;