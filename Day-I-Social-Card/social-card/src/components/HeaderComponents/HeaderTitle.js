import React from "react";
import HeaderContent from "./HeaderContent";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="header-title-wrapper">
      <div className="header-title">
        Lambda School
        <span className="date"> july 31</span>
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderTitle;
