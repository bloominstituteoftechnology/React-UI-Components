import React from "react";
import HeaderImage from "./ImageThumbnail.js";
import HeaderContent from "./HeaderContent.js";
import "./Header.css";

const HeaderContainer = () => {
  return (
    <div className="header__container">
      <HeaderImage />
      <HeaderContent />
    </div>
  );
};

export default HeaderContainer;
