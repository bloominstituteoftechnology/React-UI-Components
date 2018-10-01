import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="header-title-wrapper">
      <div className="header-name">Lambda School</div>
      <span className="header-handle-date">@LambdaSchool • 26 Sept</span>
    </div>
  );
};

export default HeaderTitle;
