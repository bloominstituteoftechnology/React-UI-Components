import React from 'react';
import './Card.css';

import CardBanner from './CardBanner'
import CardContent from './CardContent'

function CardContainer(){
    return(
        <a className="card-link" href="">
        <div className="twitter-body">
            <CardBanner />
            <CardContent />
        </div>
        </a>
    )
}

export default CardContainer
