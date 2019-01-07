import React from "react";
import "./Header.css";

const HeaderTitle = props => {
  return (
    <div>
      <h3>{props.profileName}</h3>
      <p>{props.profileHandle}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default HeaderTitle;
