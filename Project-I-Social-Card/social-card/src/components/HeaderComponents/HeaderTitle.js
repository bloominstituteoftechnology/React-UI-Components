import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <h1>Lambda School</h1>
      <a className="twitter-handle" href="http://twitter.com/lambdaschool">
        @LambdaSchool{" "}
      </a>
      <span className="circle" />
      <span className="timestamp"> 26 Jan</span>
    </div>
  );
};

export default HeaderTitle;
