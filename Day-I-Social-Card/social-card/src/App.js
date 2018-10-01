import React from "react";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
const App = () => {
  return (
    <div className="container">
      <div>
        <ImageThumbnail />
      </div>
      <div className="main-body">
        <HeaderContainer />
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
