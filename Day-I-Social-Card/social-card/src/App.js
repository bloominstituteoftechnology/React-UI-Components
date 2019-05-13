import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import HeaderLogo from './components/HeaderComponents/ImageThumbnail';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

{/* <HeaderContainer /> */}

const App = () => {
  return (
    <div className="app">
      <div>
        <HeaderLogo />
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
