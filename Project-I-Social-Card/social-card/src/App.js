import React from 'react';
import './index.css';


// import "./styles.css";

import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
import HeaderTitle from "./components/HeaderComponents/HeaderTitle";
import HeaderContent from "./components/HeaderComponents/HeaderContent";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardBanner from "./components/CardComponents/CardBanner";
import CardContent from "./components/CardComponents/CardContent";
import CardContainer from "./components/CardComponents/CardContainer";




const App = () => {
    return (
        <div className="App">
    <ImageThumbnail />
    <HeaderTitle />
    <HeaderContent />
    <HeaderContainer />
    <CardBanner/>
    <CardContent/>
    <CardContainer/>
  </div>
);
    }

export default App;
