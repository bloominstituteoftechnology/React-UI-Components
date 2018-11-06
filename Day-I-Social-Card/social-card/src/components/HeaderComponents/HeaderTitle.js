import React from "react";
import "./Header.css";

function HeaderTitle(props) {
  return (
    <React.Fragment>
      <h1 className="HeaderTitle_header">
        {props.title}
        <span className="HeaderTitle_supplimental-data">
          @{props.taggedPerson} - {props.date}
        </span>
      </h1>
    </React.Fragment>
  );
}

export default HeaderTitle;
