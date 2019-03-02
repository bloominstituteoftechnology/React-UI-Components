// import React
import React from 'react';
// import APP component from App.js file
import './App.css';

// import individual components
import ImgThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/FooterContainer';


const App = () => {
  return (
    <div className='container-App'>
      <ImgThumbnail />
      <div className='post-right'>
        <HeaderContainer />
        <CardContainer />
        <Footer />
      </div>
    </div>
  );
};

export default App;

