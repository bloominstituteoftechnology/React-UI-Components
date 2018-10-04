import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import HeaderTitle from "./components/HeaderComponents/HeaderTitle";
import HeaderContent from "./components/HeaderComponents/HeaderContent";
import CardContainer from "./components/CardComponents/CardContainer";
import CardBanner from "./components/CardComponents/CardBanner";
import CardContent from "./components/CardComponents/CardContent";
import Footer from "./components/FooterComponents/Footer";

const App = () => {
  return (
    <div className="container">
    <div className="headerRow">
      <HeaderContainer className="headerContainer">
        Header Container
        <HeaderContent>HeaderContent</HeaderContent>
        <br></br>
        <HeaderTitle>HeaderTitle</HeaderTitle>
      </HeaderContainer>
      </div>
      
      <div className="row">
        <CardContainer className="cardContainer">CardContainer</CardContainer>
        <CardBanner className="cardBanner">CardBanner</CardBanner>
        <CardContent className="cardContent ">CardContent</CardContent>
      </div>

      <div className="footer">
        <Footer className="footer">Footer</Footer>
      </div>
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
