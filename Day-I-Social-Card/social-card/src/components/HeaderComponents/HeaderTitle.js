import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent";
import moment from "moment";

const time = moment();

const HeaderTitle = () => {
  return (
    <div className="header-title-wrapper">
      <span className="lambda-school-title">Lambda School</span>
        <span className="time-stamp"> {time.format("MMM DD ")}</span>
        <HeaderContent />
    </div>
  );
};

export default HeaderTitle;
