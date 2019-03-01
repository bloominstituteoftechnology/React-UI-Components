import React from 'react';
import './Card.css';

function CardContent (props) {
    return (
        <div className='card-content'>
            <h4 className='card-content-header'>{props.header}</h4>
            <p className='card-content-text'>{props.text}</p>
            <p className='card-content-link'>{props.link}</p>
        </div>
    );
}

export default CardContent;
