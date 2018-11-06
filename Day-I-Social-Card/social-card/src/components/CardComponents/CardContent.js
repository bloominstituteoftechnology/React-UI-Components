import React from 'react';
import './Card.css';

function CardContent(props){
    return (
        <React.Fragment>
        <h2 class="card-title">{props.title}</h2>
        <p class="card-content">{props.content}</p>
        <p class='link'>{props.href}</p>
        </React.Fragment>
    );
}

export default CardContent;