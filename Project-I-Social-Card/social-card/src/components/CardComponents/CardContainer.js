import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {
    return(
        <a href="https://www.reactjs.org" className="card-link" target="_blank">
        <div className="card-container">
            <CardBanner />
            <CardContent />
        </div>
        </a>
    );
}

export default CardContainer;