import React from 'react';
import './Card.css';

function CardBanner(props) {
    return  <img src={props.src} alt={props.alt} className='banner-image'></img>
    
}

export default CardBanner;
