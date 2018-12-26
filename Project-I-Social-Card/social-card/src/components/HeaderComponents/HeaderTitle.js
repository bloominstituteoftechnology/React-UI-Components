import React from "react";
import "./Header.css";

const HeaderTitle = props => {
  return (
    <React.Fragment>
      <h2 className="lambdahead"> Lambda School</h2>
      <h3 className="lambdahead2"> @LambdaSchool · 26 jan </h3>
    </React.Fragment>
  );
};

export default HeaderTitle;
