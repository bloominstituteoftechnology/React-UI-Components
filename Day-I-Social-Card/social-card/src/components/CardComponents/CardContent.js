import React from 'react';
import './Card.css';

const CardContent = props => (
    <div className="card-content">
        <h6 className="card-content-title">{props.title}</h6>
        <p className="card-content-body">{props.body}</p>
        <p className="card-content-link">{props.site}</p>
    </div>
);

export default CardContent;