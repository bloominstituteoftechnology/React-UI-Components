import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

// Name The Component
const CardContainer = () => {
    return (
        <div>
            <CardBanner />
            <CardContent />
            <a href='https://www.reactjs.org'>reactjs.org</a>
        </div>
    )
}

// export The Default
export default CardContainer;