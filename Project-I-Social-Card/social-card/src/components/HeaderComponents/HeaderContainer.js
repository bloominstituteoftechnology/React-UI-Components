import React from "react";
import "./Header.css";

import ImageThumbnail from "./ImageThumbnail.js";

import HeaderTitle from "./HeaderTitle.js";

import HeaderContent from "./HeaderContent.js";

const HeaderContainer = () => {
  return (
    <div className="header">
      <ImageThumbnail />
      <div>
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;
