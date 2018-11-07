import React from "react";
import "./App.css";

import Header from "./components/HeaderComponents/HeaderContainer";
import CardContent from "./components/CardComponents/CardContent";
import Footer from "./components/FooterComponents/Footer";

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
