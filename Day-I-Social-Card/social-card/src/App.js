import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import './App.css';

// imports to be able to use FontAwesome for icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';


library.add(faSync);
library.add(faHeart);
library.add(faEnvelope);
library.add(faComment);

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <a href="https://www.reactjs.org" target="_blank">
        <CardContainer />
      </a>
      <Footer />
    </div>
  );
};

export default App;
