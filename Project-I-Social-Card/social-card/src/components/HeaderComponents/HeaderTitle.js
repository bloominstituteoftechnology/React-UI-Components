import React from "react";
import HeaderContent from "./HeaderContent";
import "./Header.css";


const HeaderTitle = () => {
  return (
    <div className="header-title-wrapper">
      <div className="header-title">
        Lambda School
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderTitle;
