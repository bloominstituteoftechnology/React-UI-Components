import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';


const App = () => {
  return (
    <div className="app-container">
      <HeaderContainer />
      <a href="https://www.reactjs.org" alt="card container" class="card-container"><CardContainer /></a>
      <Footer />
    </div>
  );
};

export default App;
