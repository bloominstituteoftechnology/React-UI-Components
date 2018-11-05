import React from 'react';
import moment from 'moment';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';
import Footer from './components/FooterComponents/Footer.js';

const App = () => {
  return (
    <div className='app'>
      <div className='heading'>
        <HeaderContainer />
      </div>
      <div className='card'>
        <CardContainer />
      </div>
      <Footer />
    </div>
  );
};

export default App;
