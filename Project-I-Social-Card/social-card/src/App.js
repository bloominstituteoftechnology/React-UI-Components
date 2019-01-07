import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer.js';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail.js';
import Footer from './components/FooterComponents/Footer.js';
const App = () => {
  return (
    <div className = "container"><ImageThumbnail />
      <div className = "main-content-container">

        <HeaderContainer/>
        <CardContainer />
        <Footer />
      </div>
    </div>
  );
};

export default App;
