import React from 'react';
import './Card.css';

export default function CardContent(props) {
    return (
        <div className="card-content">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <a className="link" href="https:reactjs.org" target="__blank">reactjs.org</a>
        </div>
    )
}