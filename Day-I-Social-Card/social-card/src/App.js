import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
// import Footer from '/componentes/FooterComponents/Footer';

const App = () => {
  return (
    <div className='container'>
      <HeaderContainer />
      <CardContainer />
      {/* <Footer /> */}

    </div>
  );
};

export default App;
