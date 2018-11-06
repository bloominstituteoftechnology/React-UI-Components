import React from 'react';
import './Card.css';

function CardContent(props) {
    return (
     <div className="banner-wrapper no-margin">
        <div className="content-description">
            <h2>{props.cardTitle}</h2>
            <p>{props.cardDescription}</p>
            <a href={props.cardUrl}>{props.cardUrlContnent}</a>
        </div>
      </div>
    );
}

export default CardContent;