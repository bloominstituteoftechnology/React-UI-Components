import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


function CardContainer() {
    return(
        <div className="card"><div className="cardContent">
        <a href="https://www.reactjs.org" >
        
            <CardBanner />
            <CardContent />
        </a>
        </div>
        </div>

    );
}

export default CardContainer;