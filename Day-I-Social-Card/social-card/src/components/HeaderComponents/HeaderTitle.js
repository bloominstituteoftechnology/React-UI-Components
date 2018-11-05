import React from "react";
import "./Header.css";

function HeaderTitle(props) {
  return (
    <React.Fragment>
      <h1 className="HeaderTitle_header">{props.title}</h1>
      <span className="HeaderTitle_supplimental-data">
        `@
        {props.taggedPerson} - {props.date}`
      </span>
    </React.Fragment>
  );
}

export default HeaderTitle;
