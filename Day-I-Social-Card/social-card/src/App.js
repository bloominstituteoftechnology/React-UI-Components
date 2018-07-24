import React from 'react';
import './App.css';
import HeaderContainer from "./components/HeaderComponents/HeaderContainer.js";
import CardContainer from "./components/CardComponents/CardContainer.js";
import Footer from "./components/FooterComponents/Footer.js";

const App = () => {
  return (
    
    <div className="card-container">
    <HeaderContainer />
    
    <a href="https://www.reactjs.org">
    <CardContainer />
    </a>
    <Footer />
    
    </div>

    
  );
};

export default App;


