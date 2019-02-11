import React from 'react';
import './reset.css'
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <CardContainer />
      <div className="footer">
        <div class="ibar"><p>Interaction Bar</p></div>
      </div>
    </div>
  );
};

export default App;
