import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="container my-3 py-3">
      <HeaderContainer />
      <div className="card-wrapper mb-4">
        <div className="card-section">
          <a href="https://reactjs.org" target="_blank" className="card-link">
            <CardContainer />
          </a>
        </div>
      </div>
      <div className="footer-wrapper">
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
