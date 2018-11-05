import React from 'react';
import './Card.css';

function CardContent (props) {
    return (
        <React.Fragment>
            <p className="card-title">{props.title}</p>
            <p className="card-content">{props.content}</p>
            <p className="card-source">{props.source}</p>
        </React.Fragment>
    );
}

export default CardContent;