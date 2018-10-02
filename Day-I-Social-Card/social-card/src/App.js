import React from "react";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
import Footer from "./components/FooterComponents/Footer";
const App = () => {
  return (
    <div className="container">
      <div>
        <ImageThumbnail />
      </div>
      <div className="main-body">
        <HeaderContainer />
        <CardContainer />
        <Footer />
      </div>
    </div>
  );
};

export default App;
