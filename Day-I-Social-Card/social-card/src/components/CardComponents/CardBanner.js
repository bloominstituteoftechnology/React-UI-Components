import React from 'react';
import './Card.css';

const CardBanner = props => (
    <div className="card-banner">
        <img src={props.image}></img>
    </div>
);

export default CardBanner;