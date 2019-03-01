import React from 'react';
import './Card.css';

function CardBanner (props) {
    return (
        <img src={props.src} className='card-content-banner' alt='React logo' />
    );
}

export default CardBanner;