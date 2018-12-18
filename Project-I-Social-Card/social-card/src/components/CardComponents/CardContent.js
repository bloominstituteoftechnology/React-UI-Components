import React from 'react';
import './Card.css';

function CardContent(props) {
    return (
        <React.Fragment>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <p className="gray-text">{props.linkName}</p>

        </React.Fragment>
    )
}

export default CardContent;