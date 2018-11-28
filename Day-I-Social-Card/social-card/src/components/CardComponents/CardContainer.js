import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = () => {
    // React.createElement('h1')
   return <div className="card-container">
        <CardBanner />
        <CardContent />
    </div>
}
export default CardContainer;
