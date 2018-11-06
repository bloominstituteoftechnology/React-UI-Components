import React from "react";
import "./Card.css";

function CardContent(props) {
  return (
    <div className="CardContent">
      <h2 className="Card_title">{props.title}</h2>
      <p className="Card_p">{props.paragraphContent}</p>
      <a className="Card_link" href={props.link} target="_blank">
        {props.linkContent}
      </a>
    </div>
  );
}

export default CardContent;
