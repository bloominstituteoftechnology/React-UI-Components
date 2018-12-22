import React from 'react';
import './App.css';
import HeadContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => { 
  return (
    <div className='main-container'>
      <div>
          <HeadContainer />
      </div>
      <div>
        <CardContainer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
