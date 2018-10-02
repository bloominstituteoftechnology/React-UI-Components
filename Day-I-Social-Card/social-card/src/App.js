import React from 'react';
import './App.css';
import IconContainer from './components/IconComponents/IconContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import FooterContainer from './components/FooterComponents/FooterContainer';

const App = () => {
  return (
    <div className="container">
        <div className="icon-box">
            <IconContainer />
        </div>
        <div className="content-box">
            <HeaderContainer />
            <CardContainer />
            <FooterContainer />
        </div>
    </div>
  );
};

export default App;
