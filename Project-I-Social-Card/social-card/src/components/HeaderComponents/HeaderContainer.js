import React from "react";
import "./Header.css";

import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => (
  <div className="HeaderContainer">
    <div className="Thumbnail">
      <ImageThumbnail />
    </div>
    <div className="HeadContent">
      <HeaderTitle />
      <HeaderContent />
    </div>
  </div>
);

export default HeaderContainer;
