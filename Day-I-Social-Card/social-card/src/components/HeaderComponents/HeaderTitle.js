import React from 'react';
import HeaderContent from "./HeaderContent";
import "./Header.css";
import moment from 'moment';

const HeaderTitle = () => {
  return (
    <div className="header-title-wrapper">
      <div className="header-title">
        Lambda School
        <span className="commentor"> @Lambda School</span>
        <span className="date"> -  {moment().format("dddd MMM Do YYYY")}</span>
        </div>
        <HeaderContent />
    </div>
  );
};

export default HeaderTitle;
