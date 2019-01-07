import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="header__content__title">
      <h1>Lambda School</h1>
      <p className="header__tag">@LambdaSchool</p>
      <p className="header__dot">•</p>
      <p className="header__date">26 jan</p>
    </div>
  );
};

export default HeaderTitle;
