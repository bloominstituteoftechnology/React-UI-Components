import React from "react";
import "./Header.css";

const HeaderTitle = ({ headerTitle, headerSubtitle }) => {
  return (
    <div className="headerTitleHolder">
      <h2 className="headerTitle">{headerTitle}</h2>
      <h3 className="headerSubtitle">{headerSubtitle}</h3>
    </div>
  );
};

export default HeaderTitle;
