import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
// import FooterContainer from './components/HeaderComponents/HeaderContainer';
const App = () => {
  return (
    <div className="app-container">
      <HeaderContainer />
      <CardContainer />
      {/* <Footercontainer /> */}
    </div>
  );
};

export default App;
