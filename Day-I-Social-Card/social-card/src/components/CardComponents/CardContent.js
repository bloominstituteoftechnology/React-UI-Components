import React from "react";
import "./Card.css";

function CardContent(props) {
  return (
    <React.Fragment>
      <h2 className="Card_title">{props.title}</h2>
      <p className="Card_p">{props.paragraphContent}</p>
      <a href={props.link}>{props.linkContent}</a>
    </React.Fragment>
  );
}

export default CardContent;
