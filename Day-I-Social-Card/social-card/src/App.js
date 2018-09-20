import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'
const App = () => {
  return (
    <div className = 'page-container'>

  <div className = 'header'>
  <HeaderContainer />
  </div>
  
  <div className = 'middle'>
    <CardContainer/>
  </div>

</div>



  );
};

export default App;
© 2018 GitHub, Inc.