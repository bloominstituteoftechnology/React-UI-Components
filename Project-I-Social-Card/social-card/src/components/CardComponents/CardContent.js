import React from 'react';
import './Card.css';

const CardContent = (props) => {
    return (
        <div className="card-content">
            <h4>{props.h1}</h4>
            <p>{props.content}</p>
            <p className="gray-font website">{props.website}</p>
        </div>
    );
};

export default CardContent;