import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js'; 

let CardContainer = (props) => {
    return(
        <div class="Card-Container">
        <CardBanner />
        <CardContent />
    </div>
    )
}

export default CardContainer; 