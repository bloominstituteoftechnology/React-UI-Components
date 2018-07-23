import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';


const App = () => {

  return (
    <div className="main-container">


      <HeaderContainer />
      <a className="card-link" href="http://www.reactjs.org"><CardContainer /></a>

    </div>
  );
}


export default App;
