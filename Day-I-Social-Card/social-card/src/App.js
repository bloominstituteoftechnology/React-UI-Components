import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  return (
    <div className="card-container">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;