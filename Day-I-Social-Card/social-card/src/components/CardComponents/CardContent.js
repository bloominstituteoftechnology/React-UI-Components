import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div className="card-content">
            <h1>{props.title}</h1>
            <p>
                {props.content}
            </p>
            <h2>{props.link}</h2>
        </div>
    );
};

export default CardContent;
