import React from 'react';
import './Card.css';

function CardContent(props) {

  return (

    <div className="card-text">

      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <a href={'https://www.' + props.href}>{props.href}</a>

    </div>

  );

}

export default CardContent;
