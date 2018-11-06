import React from 'react';
// import moment from 'moment';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';
import Footer from './components/FooterComponents/Footer.js';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSync, faComment, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faSync, faEnvelope, faHeart, faComment);

const App = () => {
  return (
    <div className='app'>
      <div className='heading'>
        <HeaderContainer />
      </div>
      <div className='card'>
        <CardContainer />
      </div>
      <Footer num='4' int='6' />
    </div>
  );
};

export default App;
