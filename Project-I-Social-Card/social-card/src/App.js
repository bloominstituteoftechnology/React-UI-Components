import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    // Using React.Fragment as <></> doesn't work immediately 
    // without tweaking things since project was built with 
    // old version of react. got rid of pesky Divs
    <React.Fragment>
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </React.Fragment>
  );
};

export default App;
