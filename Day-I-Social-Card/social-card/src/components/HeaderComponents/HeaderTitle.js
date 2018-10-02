import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="header-tittle-container">
      <div className="top-tittle">
        <h1>Lambda School </h1>
        <h2> @LambdaSchool &middot; 26 jan</h2>
      </div>
      <div className="bottom-tittle">
        <p>
          Lets's learn React by building simple interfaces with components.
          Don't try to overthink it, just keep it simple and have fun. One you
          feel comfortable using components you are well on your way to
          mastering React!
        </p>
      </div>
    </div>
  );
};

export default HeaderTitle;
