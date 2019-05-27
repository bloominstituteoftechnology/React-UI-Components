import React from 'react';
import './Card.css';



function CardContent({ title, text, link }) {
    return (
        <div className='card-content'>
            <h3>{ title }</h3>
            <p>{ text }</p>
            <p>{ link }</p>
        </div>
    )
}

export default CardContent;