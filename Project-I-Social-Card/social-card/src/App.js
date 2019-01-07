import React from "react";
import "./App.css";

import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import HeaderContent from "./components/HeaderComponents/HeaderContent";
import HeaderTitle from "./components/HeaderComponents/HeaderTitle";
import ImageThumbail from "./components/HeaderComponents/ImageThumbnail";
import CardContainer from "./components/CardComponents/CardContainer";
import CardContent from "./components/CardComponents/CardContent";
import CardBanner from "./components/CardComponents/CardBanner";

const App = () => {
  return (
    <div className="App">
      <ImageThumbail />
      <HeaderContainer />
      <HeaderContent />
      <HeaderTitle />
      <CardBanner />
      <CardContainer />
      <CardContent />
    </div>
  );
};

export default App;
