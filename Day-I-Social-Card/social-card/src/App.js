import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer'


const App = () => {

  return (
    <div className="main-wrapper">
      <div className="inner-wrapper">
        <HeaderContainer username="Lambda School" usertag="@LambdaSchool"/>
        <CardContainer />
        <Footer retweets={6} likes={4} />
      </div>
    </div>
  );
};

export default App;
