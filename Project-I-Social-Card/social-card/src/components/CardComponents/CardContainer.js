import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';



// Create a <CardContainer/ > container component that will hold your card components.
// The entire <CardContainer /> should take a user to https://www.reactjs.org when clicked.

function CardContainer(){
    return (
        <div className="card-container">
                <CardBanner />
        </div>
    );

}

export default CardContainer;
