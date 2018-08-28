import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent";
import moment from "moment";

const time = moment();

const HeaderTitle = () => {
  return (
    <div className="header-title-wrapper">
      <div className="header-title">
        Lambda School
        <span className="thing">@LambdaSchool • </span>
        <span className="time-stamp">{time.format("MMM do")}</span>
      </div>
      <HeaderContent />
    </div>
  );
};

export default HeaderTitle;
