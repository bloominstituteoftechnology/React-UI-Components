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
    <div className="container">
    <a href="https://www.reactjs.org">
    <CardContainer />
    <div className="header">
        <ImageThumbnail />
        <div className="center">        
            <HeaderTitle />
            <HeaderContent />
            <div className="card">
                <CardBanner />
                <CardContent />
            </div>
        </div>
    </div>
    </a>
    </div>
  );
};

export default App;
