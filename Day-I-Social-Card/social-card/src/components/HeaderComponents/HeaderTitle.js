import React from "react";
import "./Header.css";

const HeaderTitle = props => {
  const date = new Date();
  return (
    <div className="header-text">
      <h2>Lambda School <span>@LambdaSchool • 1 oct</span></h2>
    </div>
  );
};

export default HeaderTitle;
