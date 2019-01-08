import React from 'react';
import './Card.css';

function CardContent(props) {
    return (
        <div className="card-text">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <p className="gray-text">{props.linkName}</p>
        </div>
    )
}

export default CardContent;