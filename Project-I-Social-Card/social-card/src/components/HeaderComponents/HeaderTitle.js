import React from "react";
import "./Header.css";

function HeaderTitle() {
    const date = new Date().getMonth() + 1;
  return <h1> @LambdaSchool {date}</h1>;
}

export default HeaderTitle;


