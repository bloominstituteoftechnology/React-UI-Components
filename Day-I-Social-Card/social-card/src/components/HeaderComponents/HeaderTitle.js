import React from 'react';
import './Header.css';
import moment from "moment";
const time = moment();

const HeaderTitle = () => {
  return (
    <div className="main-header__title-container">
      <h1 className="main-header__title">Lambda School</h1>
      <p className="main-header__title--handler">@LambdaSchool</p>
      <span className="main-header__title--handler-space"></span>
      <p className="main-header__title--handler-date">{time.format("Do MMM")}</p>
    </div>
  );
};

export default HeaderTitle;
