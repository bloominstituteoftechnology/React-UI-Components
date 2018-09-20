import React from 'react';
import './Card.css';

const CardContent = props => (
    <div className="card-content">
        <h6 className="card-title">{props.title}</h6>
        <p className="card-body">{props.body}</p>
        <p className="card-site">{props.site}</p>
    </div>
);

export default CardContent;