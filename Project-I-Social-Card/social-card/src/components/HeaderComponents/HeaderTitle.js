import React from "react";
import "./Header.css";
import Moment from "moment";

let timeStamp = Moment().format("D MMM");

export function HeaderTitle() {
  return (
    <div className="heading">
      <h1> Lambda School </h1>
      <h3> @LambdaSchool </h3>
      <h3 className="dot">.</h3>
      <h3>{timeStamp}</h3>
    </div>
  );
}
