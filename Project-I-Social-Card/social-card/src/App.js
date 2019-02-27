import React from "react";
import "./App.css";

// Components
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import ImageThumbnail from "./components/HeaderComponents/ImageThumbnail";
import HeaderTitle from "./components/HeaderComponents/HeaderTitle";
import HeaderContent from "./components/HeaderComponents/HeaderContent";

const App = () => {
  return (
    <div>
      <HeaderContainer direction="row">
        <ImageThumbnail
          thumbnailImage="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"
          imageAlt="Lambda School Logo"
        />
        <HeaderContainer direction="column">
          <HeaderTitle />
          <HeaderContent />
        </HeaderContainer>
      </HeaderContainer>
    </div>
  );
};

export default App;
