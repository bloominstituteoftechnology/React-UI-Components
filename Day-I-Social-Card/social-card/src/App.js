import React from 'react';
import './App.css';
// import CardBanner from './components/CardComponents/CardBanner';
import CardContainer from './components/CardComponents/CardContainer';
// import CardContent from './components/CardComponents/CardContent'; 
import Footer from './components/FooterComponents/Footer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
// import HeaderContent from './components/HeaderComponents/HeaderContent'; 
// import HeaderTitle from './components/HeaderComponents/HeaderTitle'; 
// import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';

const App = () => {
  return (
    <div>
    
      <HeaderContainer /> 
      <CardContainer />
    </div>
    
  );
};

export default App;
