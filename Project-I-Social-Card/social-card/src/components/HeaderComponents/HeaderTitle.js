import React from "react";
import "./Header.css";

const moment = require("moment");
const date = moment().format("D MMM");

const HeaderTitle = () => {
  return (
    <div className="header__content__title">
      <h1>Lambda School</h1>
      <p className="header__tag">@LambdaSchool</p>
      <p className="header__dot">•</p>
      <p className="header__date">{date}</p>
    </div>
  );
};

export default HeaderTitle;
