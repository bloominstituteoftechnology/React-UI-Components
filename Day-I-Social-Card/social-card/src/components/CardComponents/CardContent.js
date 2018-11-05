import React from 'react';
import './Card.css';

function CardContent (props){
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    );
}

export default CardContent;