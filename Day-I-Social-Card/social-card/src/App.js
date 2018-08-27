import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import HeaderContent from './components/HeaderComponents/HeaderContent'
import HeaderTitle from './components/HeaderComponents/HeaderTitle'
const App = () => {
  return (
    <div className = "header=title-wrapper">
     <div className = "header-title">
     Lambda School
     <span className = "time-stamp">{time.format('MMM Do ')}</span>
     <HeaderContent />
     </div>
    </div>
  );
};

export default App;
