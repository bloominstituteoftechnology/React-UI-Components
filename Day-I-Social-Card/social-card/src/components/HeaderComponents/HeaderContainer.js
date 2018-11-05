import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail.js";
import HeaderTitle from "./HeaderTitle.js";
import HeaderContent from "./HeaderContent.js";

const HeaderContainer = props => {
  return (
    <header className="headerStyle">
      <ImageThumbnail />
      <div className="headerText">
        <HeaderTitle />
      </div>
      <HeaderContent />
    </header>
  );
};
export default HeaderContainer;