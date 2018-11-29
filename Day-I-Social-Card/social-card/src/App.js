import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer";

const App = props => {
  return (
    <div className="app">
      <HeaderContainer />
      <CardContainer />
      <Footer retweet={props.re} number={props.num} />
    </div>
  );
};

export default App;
