import React from "react";
import "./Header.css";
import "./Header.css";
import HeaderTitle from "./HeaderTitle.js";
import HeaderContent from "./HeaderContent.js";
import ImageThumbnail from "./ImageThumbnail.js"

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
          <ImageThumbnail />
      </div>
      <div className="header-text">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};
export default HeaderContainer;
