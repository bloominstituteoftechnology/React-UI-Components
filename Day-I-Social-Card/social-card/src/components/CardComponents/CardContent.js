import React from 'react';
import './Card.css';

function CardContent(props) {
    return (
        <div class="cardContent">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <div class="url"><a href={props.url}>{props.url}</a></div>
        </div>
    )
}

export default CardContent