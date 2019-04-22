import React from 'react';
import './Card.css';

export default function CardBanner(props) {
    return (
        <div classNmae="card-banner">
            <img src={props.src} alt={props.alt} />
        </div>
    )
}