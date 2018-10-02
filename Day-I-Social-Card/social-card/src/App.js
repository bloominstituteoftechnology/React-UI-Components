import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel)

const App = () => {
  let heartCount = 0;
  const incHeartCount = () => {
    heartCount += 1;
  }


  return (
    <div className="container">
    <HeaderContainer/>
    <CardContainer />
    <Footer heartCount={heartCount} onClick={incHeartCount()}/>
    
    </div>
  )
};

export default App;
