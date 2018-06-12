import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent";

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <h1>
        Lambda School<span>@LambdaSchool * 26 Jan</span>
      </h1>
      <HeaderContent />
    </div>
  );
};

export default HeaderTitle;
