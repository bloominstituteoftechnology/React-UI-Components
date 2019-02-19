import React from 'react';
import './index.css';


// import "./styles.css";

import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
import HeaderTitle from "./components/HeaderComponents/HeaderTitle";
// import HeaderContent from "./components/HeaderComponents/HeaderContent";
// import HeaderContainer from "./components/HeaderComponents/HeaderContainer";


const App = () => {
    return (
        <div className="App">
    <ImageThumbnail />
    <HeaderTitle />
    {/* <HeaderContent />
    <HeaderContainer /> */}
  </div>
);
    }

export default App;
