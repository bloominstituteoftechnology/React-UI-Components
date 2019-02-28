import React from "react";
import "./Header.css";
import moment from "moment";

function HeaderTitle(props) {
  let postDate = moment()
    .format("DD MMM")
    .toLowerCase();
  return (
    <p className="twitter-title">
      {props.name}
      <span>
         {props.handle} &#183; {postDate}
      </span>
    </p>
  );
}

export default HeaderTitle;
