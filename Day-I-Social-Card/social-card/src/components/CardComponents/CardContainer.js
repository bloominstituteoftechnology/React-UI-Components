import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

function activateLink(link) {
    return window.location.href = `${link}`;
}
const CardContainer = () => {
    return (
        <div className = "card-container" onClick={() => 
                activateLink('https://www.reactjs.org')}>

        <CardBanner />
        <CardContent />
        </div>
    );
};

export default CardContainer;