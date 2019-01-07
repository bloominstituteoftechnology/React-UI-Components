import React from "react";
import "./Header.css";

const HeaderTitle = props => {
  return (
    <div className="header-title">
      <h3 className="header-item">{props.profileName}</h3>
      <p className="header-item grey">{props.profileHandle}</p>
      <span className="header-item grey">&#8226;</span>
      <p className="header-item grey">{props.date}</p>
    </div>
  );
};

export default HeaderTitle;
