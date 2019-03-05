import React from 'react';
import './Card.css';

const CardContent = props => (
    <div className='card-content'>
        <h2>{props.content.title}</h2>
        <p>{props.content.text}</p>
        <p className='info'>{props.content.link}</p>
    </div>
)

export default CardContent