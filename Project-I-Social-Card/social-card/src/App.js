import React from 'react';
import './App.css';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import CardBanner from './components/CardComponents/CardBanner';
import CardContent from './components/CardComponents/CardContent';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div class="container">
    <CardContainer />
    <div class="header">
        <ImageThumbnail />
        <div class="center">        
            <HeaderTitle />
            <HeaderContent />
            <div class="card">
                <CardBanner />
                <CardContent />
            </div>
        </div>
    </div>
    </div>
  );
};

export default App;
