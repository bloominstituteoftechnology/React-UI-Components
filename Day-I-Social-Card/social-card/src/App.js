import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';
import Footer from './components/FooterComponents/Footer.js';

const App = (props) => {
  return (
    <div className="app-container">
      <HeaderContainer/>
      <CardContainer/>
      <Footer likes={props.likes}/>
    </div>
  );
};

export default App;
