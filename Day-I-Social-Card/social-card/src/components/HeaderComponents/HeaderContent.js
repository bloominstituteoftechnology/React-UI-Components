import React from "react";
import "./Header.css";

function HeaderContent(props) {
  return (
    <React.Fragment>
      <p className="HeaderContent_p">{props.content}</p>
    </React.Fragment>
  );
}

export default HeaderContent;
