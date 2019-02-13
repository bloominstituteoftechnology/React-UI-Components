import React from "react";
import "./Header.css";

function HeaderTitle() {
    const date = new Date().getMonth() + 1;
  return <div className= "HeaderTitle">
  <h1> @LambdaSchool {date}</h1>
  </div>
}

export default HeaderTitle;


