import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer' 
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import CardContainer from './components/CardComponents/CardContainer'
import Footer from './components/FooterComponents/Footer';


const App = () => {
  return (
    <div className="App">
        <ImageThumbnail /> 
        <div>
        <HeaderContainer /> 
         <CardContainer /> 
         <Footer />
        </div>   
    </div>
);
};

export default App;


  