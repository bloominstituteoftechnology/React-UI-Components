import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';


const CardContainer = () => {
    return (<a className="card-wrapper" href="https://www.reactjs.org">
        <CardBanner />
    </a>);
}

export default CardContainer;

