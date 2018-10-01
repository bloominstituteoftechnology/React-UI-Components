import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="app">
      <HeaderContainer />
      <CardContainer onClick={openLink} />
      <Footer retweet={6} like={4}/>
    </div>
  );
};

export default App;

function openLink() {
  window.open("https://www.reactjs.org", "_blank");
}
