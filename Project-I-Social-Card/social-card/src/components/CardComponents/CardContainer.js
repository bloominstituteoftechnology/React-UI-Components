import React from "react";
import "./Card.css";

import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = props => {
  return <div className="card-container">
      <a href="https://www.reactjs.org" target="_blank">
        <CardBanner postImage={props.post.postImage} />
      </a>
      <a href="https://www.reactjs.org" target="_blank">
        <CardContent post={props.post} />
      </a>
    </div>;
};

export default CardContainer;
