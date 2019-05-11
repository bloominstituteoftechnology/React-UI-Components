import React from 'react';
import './Card.css';

const CardBanner = (props) => {
    return (
        <img className="card-banner" src={props.reactLogo} alt={props.altText} />
    );
};

export default CardBanner;