import React from 'react';
import './Card.css';

function CardContent(props) {
    return (
        <div className='content' >
            <p className='title'>{props.title}</p>
            <p>{props.content}</p>
            <p className='url'>{props.url}</p>
        </div>
    )
}

export default CardContent;
