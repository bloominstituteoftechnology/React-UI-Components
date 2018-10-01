import React from "react";
import "./App.css";
import CardContent from "./components/CardComponents/CardContainer.js";
import HeaderContent from "./components/HeaderComponents/HeaderContainer.js";
import ImageThumbnail from "./components/ImageThumbnailComponents/ImageThumbnail.js";
import Footer from "./components/FooterComponents/Footer.js";

const App = () => {
  return (
    <div className="app">
      <div className="logo-container">
        <ImageThumbnail />
      </div>

      <div className="main-content">
        <HeaderContent />
        <CardContent />
        <Footer />
      </div>
    </div>
  );
};

export default App;
