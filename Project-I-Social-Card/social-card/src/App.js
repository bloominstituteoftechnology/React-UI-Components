// import React
import React from 'react';
// import APP component from App.js file
import './App.css';

// import individual components
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';


const App = () => {
  return (
    <div>
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;

