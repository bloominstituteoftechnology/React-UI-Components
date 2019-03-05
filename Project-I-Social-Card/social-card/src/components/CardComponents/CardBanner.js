import React from 'react';
import './Card.css';

const CardBanner = props => {
    return (
        <img className='card-banner' src={props.banner.src} alt={props.banner.alt}/>
    )
}

export default CardBanner