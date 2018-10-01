import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComment, faHeart, faEnvelope, faRecycle } from '@fortawesome/free-solid-svg-icons';

library.add(faComment, faHeart, faEnvelope, faRecycle)




const App = () => {
  return (
      <div className="app-container">
        <HeaderContainer />
        <CardContainer />
        <Footer />
      </div>
   
  );
};

export default App;
