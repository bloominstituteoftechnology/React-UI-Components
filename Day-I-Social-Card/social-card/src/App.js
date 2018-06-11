import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import CardContainer from './components/CardComponents/CardContainer';
import CardBanner from './components/CardComponents/CardBanner';
import CardContent from './components/CardComponents/CardContent';
import CardTitle from './components/CardComponents/CardTitle';
import CardLink from './components/CardComponents/CardLink';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div>
    <HeaderContainer />
      <ImageThumbnail />
      <HeaderTitle />
      <p>
      <HeaderContent />
      </p>
      <CardContainer />
      <CardBanner />
      <CardTitle />
      <CardContent />
      <CardLink />
      <Footer />
      </div>
  );
};

export default App;
