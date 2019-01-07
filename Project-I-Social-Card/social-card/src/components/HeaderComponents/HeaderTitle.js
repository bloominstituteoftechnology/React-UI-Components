import React from "react";
import "./Header.css";

const HeaderTitle = props => {
  return (
    <div className="header-title">
      <h3>{props.profileName}</h3>
      <p className="header-item">{props.profileHandle}</p>
      <span className="header-item">&#8226;</span>
      <p className="header-item">{props.date}</p>
    </div>
  );
};

export default HeaderTitle;
