import React from 'react';
import './Card.css';

function CardContent (props) {
    return (
        <div className="card-text">
            <p className="card-title">{props.title}</p>
            <p className="card-content">{props.content}</p>
            <p className="card-source">{props.source}</p>
        </div>
    );
}

export default CardContent;