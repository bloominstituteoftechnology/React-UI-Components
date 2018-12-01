import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import FooterContent from "./components/FooterComponents/Footer";

const App = () => {
  return (
    <div class="container">
      <HeaderContainer />
      <CardContainer />
      <FooterContent />
    </div>
  );
};

export default App;
