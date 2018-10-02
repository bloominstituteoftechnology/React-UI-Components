import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div>
      <p>
        <span className="bold">Lambda School</span>{" "}
        <span className="light-text">@LambdaSchool &middot; 26 jan</span>
      </p>
    </div>
  );
};

export default HeaderTitle;
