import React from "react";
import "./Card.css";

function CardBanner(props) {
  return (
    <React.Fragment>
      <img
        className="CardComponents_CardBanner"
        src={props.src}
        alt={props.alt}
      />
    </React.Fragment>
  );
}

export default CardBanner;
