import React from "react";
import "./Header.css";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import ImageThumbnail from "./ImageThumbnail";

const HeaderContainer = () => {
  return (
    <div className="header">
	  <ImageThumbnail />;
	  <div class="headerLeft">
		<HeaderTitle />;
		<HeaderContent />;
	  </div>
    </div>
  );
};

export default HeaderContainer;
