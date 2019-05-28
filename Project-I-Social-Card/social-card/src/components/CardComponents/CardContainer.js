import React from 'react';
import './Card.css';
import CardBanner from '../CardComponents/CardBanner';
import CardContent from '../CardComponents/CardContent'

const CardContainer = props => {
    return (
        <div className="card-container">
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                <CardBanner />
                <CardContent />
            </a>
        </div>
    )
}

export default CardContainer;