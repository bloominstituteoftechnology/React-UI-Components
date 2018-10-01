import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div className="card-content">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <a>{props.url}</a>
        </div>
    );
}

export default CardContent;