import React from "react";
import HeaderTitle from "./HeaderTitle";
import HeaderText from "./HeaderText";
import "./Header.css";

const HeaderContent = () => {
  return (
    <div className="header__content">
      <HeaderTitle />
      <HeaderText />
    </div>
  );
};

export default HeaderContent;
