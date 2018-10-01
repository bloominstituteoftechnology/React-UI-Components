import React from 'react';
import './Card.css';

const CardBanner = props => {
    return (
        <img src={props.image} className="banner-image"/>
    );
};

export default CardBanner;