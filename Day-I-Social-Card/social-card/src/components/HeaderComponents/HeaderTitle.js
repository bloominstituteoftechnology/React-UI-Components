import React from "react";
import "./Header.css";

const HeaderTitle = props => {
  return (
    <div className="headerTitle">
      <h1>Lambda School</h1>
      <h2>@LambdaSchool</h2>
      <time datetime="2018-01-26 20:00">Jan 26</time>
    </div>
  );
};
export default HeaderTitle;
