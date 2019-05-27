import React from 'react';
import './Card.css';



function CardContent({ title, text }) {
    return (
        <div>
            <h3>{ title }</h3>
            <p>{ text }</p>
        </div>
    )
}

export default CardContent;