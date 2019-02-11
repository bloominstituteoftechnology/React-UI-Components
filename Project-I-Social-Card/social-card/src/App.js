import React from 'react';
import './App.css';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail'
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer'

const App = () => {
  return (
    <div className = "app">
      <div className = "logo">
        <ImageThumbnail />
      </div>
      <div>
        <HeaderContainer />
        <CardContainer />
        <Footer />
      </div>
    </div>
  );
};

export default App;
