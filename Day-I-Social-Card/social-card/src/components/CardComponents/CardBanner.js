import React from 'react';
import './Card.css';

function CardBanner (props){
    return (
        <div class="cardBanner">
            <img src={props.url} alt={props.alt}/>
        </div>
    )
}

export default CardBanner