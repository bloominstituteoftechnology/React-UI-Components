import React from "react";
import "./Header.css";
import "./Header.css";
import HeaderTitle from "./HeaderTitle.js";
import HeaderContent from "./HeaderContent.js";

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src="https://ibin.co/3whrpKSBbZ81.png" alt="Lambda Logo" />
      </div>
      <div className="header-text">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;
