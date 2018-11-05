import React from "react";
import "./App.css";

import Header from "./HeaderComponents/HeaderContainer.js";
import CardContent from "./CardComponents/CardContainer.js";
import Footer from "./FooterComponents/Footer.js";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <CardContent />
      <Footer />
    </div>
  );
};

export default App;
