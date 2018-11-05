import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import FooterContainer from './components/FooterComponents/Footer';

const App = () => {
  return (
      <React.Fragment>
          <HeaderContainer/>
          <CardContainer/>
          <FooterContainer/>
      </React.Fragment>
  )
};

export default App;
