import React from 'react';
import './Card.css';

export default function CardBanner(props) {
    return (
        <div className="card-banner-container">
            <img className="card-banner" src={props.src} alt={props.alt} />
        </div>
    )
}