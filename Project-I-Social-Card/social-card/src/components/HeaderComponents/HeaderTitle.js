import React from "react";
import moment from "moment";

const HeaderTitle = () => (
  <div className="title">
    <p>
      <span className="main-title">Lambda School</span>{" "}
      <span className="secondary-title">
        @lambdaschool {moment().format("Do MMM")}
      </span>
    </p>
  </div>
);

export default HeaderTitle;
