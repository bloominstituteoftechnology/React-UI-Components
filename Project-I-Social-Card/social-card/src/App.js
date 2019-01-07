import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer";

const App = () => {
  return (
    <div className="social__card__wrapper">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
