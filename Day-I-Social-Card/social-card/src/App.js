import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="container mt-5">
      <HeaderContainer />
      <div className="card-wrapper">
        <div className="card-section">
          <a href="https://reactjs.org" target="_blank" className="card-link">
            <CardContainer />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
