import React from "react";
import "./Header.css";
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let date = new Date();
const HeaderTitle = () => {
  return (
    <div className="header__name">
      <h1 className="header__title">Lambda School</h1>
      <p className="header__info">
        @LambdaSchool *{" "}
        <span>
          {date.getDate()} {monthNames[date.getMonth()]}
        </span>
      </p>
    </div>
  );
};

export default HeaderTitle;
