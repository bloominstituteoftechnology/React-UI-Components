import React from "react";
import HeaderContent from './HeaderContent.js';
import "./Header.css";

function HeaderTitle() {
  return (
    <div className="headerInfo">
    <div className="headerTitle">
      <h2>Lambda School</h2>
      <h3>@LambdaSchool · 26 jan</h3>
    </div>
        <HeaderContent/>
    </div>
    
  );
}

export default HeaderTitle;

