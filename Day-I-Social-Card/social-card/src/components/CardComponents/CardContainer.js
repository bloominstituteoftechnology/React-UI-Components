import React from 'react';
import './Card.css';
import CardBanner from '../CardComponents/CardBanner.js';
import CardContent from '../CardComponents/CardContent.js';

const CardContainer = () => {
        return (
        <a href="https://reactjs.org/">
            <div className="Card-Container">
                <CardBanner />
                <CardContent />
            </div>
        </a>
    )
}

export default CardContainer;
