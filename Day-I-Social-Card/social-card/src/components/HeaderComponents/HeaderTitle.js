import React from "react";
import HeaderContent from './HeaderContent.js';
import moment from 'moment';
import "./Header.css";

function HeaderTitle() {
  let date = moment().format("Do MMM");
  return (
    <div className="headerInfo">
    <div className="headerTitle">
      <h2>Lambda School</h2>
      <h3>@LambdaSchool · {date}</h3>
    </div>
        <HeaderContent/>
    </div>
    
  );
}

export default HeaderTitle;

