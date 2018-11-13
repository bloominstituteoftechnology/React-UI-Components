import React, { Component } from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import Footer from './components/FooterComponents/Footer';
class App extends Component {
  render() {
    return (
      <div className="app">
      <div className="logo">
      <ImageThumbnail />
      </div>    
      <div className="appcontainer">
        <HeaderContainer />
        <CardContainer />
        <Footer />  
      </div>
      </div>
    )
  }
}


export default App;