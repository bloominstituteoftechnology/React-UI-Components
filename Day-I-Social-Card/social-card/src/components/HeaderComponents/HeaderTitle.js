import React from 'react';
import HeaderContent from "./HeaderContent";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="header-title-wrapper">
      <div className="header-title">
        Lambda School
        <span className="commentor"> @Lambda School</span>
        <span className="date"> - july 31</span>
        </div>
        <HeaderContent />
    </div>
  );
};

export default HeaderTitle;
