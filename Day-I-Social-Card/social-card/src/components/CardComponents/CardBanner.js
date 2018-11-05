import React from 'react';
import './Card.css';

function CardBanner(props) {
    return (
        <div className="card-banner">
            <img className="card-img" src={props.src} alt={props.alt} />
        </div>
    );
}

export default CardBanner;