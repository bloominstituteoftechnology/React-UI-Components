import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="header__name">
      <h1 className="header__title">Lambda School</h1>
      <p className="header__info">
        @LambdaSchool * <span>Nov 28</span>
      </p>
    </div>
  );
};

export default HeaderTitle;
