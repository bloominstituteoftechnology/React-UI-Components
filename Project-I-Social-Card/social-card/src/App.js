import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="content-wrapper">
      <section className="el-header-container">
        <HeaderContainer />
      </section>
      <section className="el-card-container">
        <CardContainer />
      </section>
    </div>
  );
};

export default App;
