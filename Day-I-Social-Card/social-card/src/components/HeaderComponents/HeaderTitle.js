import React from "react";
import "./Header.css";

const HeaderTitle = props => {
  const date = new Date();
  return (
    <div className="header-text">
      <h2>Lambda School</h2><p> @LambdaSchool • 1 oct</p>
    </div>
  );
};

export default HeaderTitle;
