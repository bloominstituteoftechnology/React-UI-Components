import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

export default function CardContainer() {
    return (
        <div className="card-container">
            <CardBanner />
            <CardContent />
        </div>
    )
}