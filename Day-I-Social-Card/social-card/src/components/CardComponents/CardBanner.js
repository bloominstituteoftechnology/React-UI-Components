import React from 'react';
import './Card.css';

function CardBanner(props) {
    return <img className='banner-img' src={props.source} alt={props.alt} />
}

export default CardBanner;