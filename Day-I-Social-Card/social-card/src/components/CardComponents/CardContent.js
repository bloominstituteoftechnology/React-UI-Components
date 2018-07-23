import React from 'react';
import './Card.css';

function CardContent(props) {
    return (
        <div class="cardContent">
            <p>{props.content}</p>
        </div>
    )
}

export default CardContent