import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent";

const HeaderTitle = props => {
  return (
    <div className="header-title">
      <div className="header-text-date">
        <h2>Lambda School</h2>
        <p class="grey">@LambdaSchool - 26 jan</p>
      </div>
      <HeaderContent />
    </div>
  );
};

export default HeaderTitle;
