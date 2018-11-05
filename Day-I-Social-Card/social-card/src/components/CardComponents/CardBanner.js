import React from 'react';
import './Card.css';

function CardBanner(props) {
  return (
    <React.Fragment>
      <img src={props.source} alt="React Symbol" />
    </React.Fragment>
  );
}

export default CardBanner;