import React from "react";
import "./Header.css";
import moment from "moment";
const date = moment();

export const HeaderTitle = () => {
  return (
    <div className="header-wrapper">
      <div className="header-title">
        Lambda School
        <span className="time-stamp">
          @LambdaSchool - {date.format("Do MMM")}{" "}
        </span>{" "}
      </div>
    </div>
  );
};
