import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import moment from 'moment';
import Footer from './components/FooterComponents/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className = 'app'>
      <HeaderContainer/>
      <CardContainer/>
      <Footer/>
    </div>
  );
};

export default App;
