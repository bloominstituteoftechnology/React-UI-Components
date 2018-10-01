import React from "react";

//styling
import "./App.css";

//components
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";

const App = () => (
  <div className="social-card-container">
    <HeaderContainer />
    <CardContainer />
  </div>
);

export default App;
