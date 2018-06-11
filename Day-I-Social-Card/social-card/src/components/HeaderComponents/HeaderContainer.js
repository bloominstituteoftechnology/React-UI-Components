import React from "react";
import "./Header.css";
import "./Header.css";
import HeaderTitle from "./HeaderTitle.js";
import HeaderContent from "./HeaderContent.js";

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <HeaderTitle />
      <HeaderContent />
    </div>
  );
};
export default HeaderContainer;
