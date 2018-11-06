import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer";

const App = () => {
  return (
    <div class="app-container">
      <HeaderContainer />
      <a href="https://www.google.com">
        <CardContainer />
      </a>
      <Footer />
    </div>
  );
};

export default App;
