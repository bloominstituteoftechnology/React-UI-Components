import React from 'react';
import './Card.css';

const CardBanner = props => {
    return (
        <img src={props.src} alt='banner' className='banner-img'/>
    );
}

export default CardBanner;