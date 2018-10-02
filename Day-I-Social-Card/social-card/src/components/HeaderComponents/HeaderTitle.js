import React from "react";
import moment from "moment";

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <p>
        <strong className="bold-title">Lambda School </strong>
        @LambdaSchool • {moment().format("MMM Do YY")}
      </p>
    </div>
  );
};

export default HeaderTitle;
