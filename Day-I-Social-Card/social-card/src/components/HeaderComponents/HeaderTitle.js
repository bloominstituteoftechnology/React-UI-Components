import React from "react";
import "./Header.css";

const HeaderTitle = props => {
  const date = new Date();
  return (
    <div>
      <h2>Lambda School</h2>
      <p>@LambdaSchool</p>
      <p>October 1</p>
    </div>
  );
};

export default HeaderTitle;
