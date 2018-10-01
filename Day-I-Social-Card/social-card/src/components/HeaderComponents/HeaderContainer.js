import React from "react";
import "./Header.css";

import ImageThumbNail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = props => {
  return (
    <header>
      <ImageThumbNail />
      <div className="blah">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </header>
  );
};

export default HeaderContainer;
