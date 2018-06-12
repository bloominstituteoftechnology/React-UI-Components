import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';



import CardContainer from './components/CardComponents/CardContainer';
import CardBanner from './components/CardComponents/CardBanner';
import CardContent from './components/CardComponents/CardContent';
const App = () => {
  return (
    <div>
    <div>
    <HeaderContainer />
    
    </div>
    <CardContainer />
    <div>
    <CardBanner />
    <CardContent />
      </div> 
      
    </div>
  );
};

export default App;
