import React from 'react';
import './App.css';

// import HeaderTitle from './components/HeaderComponents/HeaderTitle.js';
// import HeaderThumbnail from './components/HeaderComponents/ImageThumbnail.js';
// import HeaderContent from './components/HeaderComponents/HeaderContent.js';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import FooterContainer from './components/FooterComponents/FooterContainer';

const App = () => {
  return (
    <div className = "app-class">
    <HeaderContainer />
    <CardContainer />
    <FooterContainer />
    </div>
  );
};

export default App;


