import React from 'react';
import './App.css';
import HeaderContainer from '../src/components/HeaderComponents/HeaderContainer';
import CardContainer from '../src/components/CardComponents/CardContainer';
import Footer from '../src/components/FooterComponents/Footer';

const App = () => {
  return (    

      <div className="App">
     
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
