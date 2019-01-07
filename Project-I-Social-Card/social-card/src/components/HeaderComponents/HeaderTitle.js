import React from "react";
import "./Header.css";
//import Timestamp from "react-timestamp";

export function HeaderTitle() {
  return (
    <div className="heading">
      <h1> Lambda School </h1>
      <h3> @LambdaSchool </h3>
      <h3 className="dot">.</h3>
      <h3>26 jan</h3>

      {/* <Timestamp> 'date' </Timestamp> */}
    </div>
  );
}
