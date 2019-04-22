import React from 'react';
import './Card.css';

export default function CardContent(props) {
    return (
        <div className="card-content">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}