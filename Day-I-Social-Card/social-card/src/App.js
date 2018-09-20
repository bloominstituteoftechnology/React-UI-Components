import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const lambdaSchool = require('./DB/lambdaSchool');
const pokemon = require('./DB/pokemon');

library.add(faComment);
library.add(faSyncAlt);
library.add(faHeart);
library.add(faEnvelope);

const App = () => {
  return (
    <section className='app-well'>
      <section className='app-container'>
        <HeaderContainer {...lambdaSchool} />
        <CardContainer {...lambdaSchool}/>
        <Footer />
      </section>
      <section className='app-container'>
        <HeaderContainer {...pokemon} />
        <CardContainer {...pokemon}/>
        <Footer />
      </section>
    </section>
  );
};

export default App;
