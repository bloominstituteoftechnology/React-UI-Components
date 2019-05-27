import React from 'react';
import './App.scss';
import './components/HeaderComponents/HeaderContainer.js';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail.js';
import HeaderTitle from './components/HeaderComponents/HeaderTitle.js';
import HeaderContent from './components/HeaderComponents/HeaderContent.js';
import CardContainer from './components/CardComponents/CardContainer.js';
import CardBanner from './components/CardComponents/CardBanner.js';
import CardContent from './components/CardComponents/CardContent.js';
import Footer from './components/FooterComponents/Footer.js';

const App = () => {
  return (
    <div className = 'appContainer'>
        <HeaderContainer>
            <ImageThumbnail />
            <HeaderTitle>
                <HeaderContent />
            </HeaderTitle>
        </HeaderContainer>

        <CardContainer>
            <CardBanner />
            <CardContent />
        </CardContainer>
     
        <Footer />
    </div>
  );
};

export default App;
