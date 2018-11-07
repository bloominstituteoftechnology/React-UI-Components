import React from "react";
import "./Header.css";

function HeaderTitle(props) {
  return <h3 className="HeaderTitle">{props.text}</h3>;
}

export default HeaderTitle;
