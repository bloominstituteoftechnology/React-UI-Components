import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = props => {
    return (
        <div class="cardWrapper">
            <CardBanner />
            <CardContent />
        </div>
    )
}

export default CardContainer;