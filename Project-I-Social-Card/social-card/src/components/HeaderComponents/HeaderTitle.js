import React from "react";
import "./Header.css";

const moment = require("moment");
const date = moment().format("D MMM");

const HeaderTitle = () => {
  return (
    <div className="header__title__container">
      <h2 className="header__title">Lambda School</h2>
      <span className="header__tag">@LambdaSchool</span>
      <span className="header__dot">.</span>
      <span className="header__date">{date}</span>
    </div>
  );
};

export default HeaderTitle;
