import React from 'react';
import './Card.css';

function CardBanner(props) {
    return (
        <img class="banner" src={props.imgSrc} />
    );
}

export default CardBanner;