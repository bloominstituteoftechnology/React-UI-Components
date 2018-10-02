import React from 'react';
import './App.css';
import Header from './components/HeaderComponents/Header';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel, faCalendar, faComment, faRetweet, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel);
library.add(faCalendar);
library.add(faComment);
library.add(faRetweet);
library.add(faHeart);
library.add(faEnvelope);


const App = () => {
  return (
    <div className='app'>
      <Header />
      <CardContainer />
      <Footer />
    </div>
  );
};


export default App;
