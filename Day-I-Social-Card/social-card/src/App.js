import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="app">
      <HeaderContainer />
      <CardContainer onClick={openLink} />
    </div>
  );
};

export default App;

function openLink() {
  window.open("https://www.reactjs.org", "_blank");
}
