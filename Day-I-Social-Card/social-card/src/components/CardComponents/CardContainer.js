import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardTitle from './CardTitle';
import CardBanner from './CardBanner';


const CardContainer = () => (
    <a href="https://www.reactjs.org">
        <div>
            <CardBanner />
            <CardTitle />
            <CardContent />
        </div>
    </a>
)
export default CardContainer;

// document.querySelector('.cardContainer').addEventListener('click', () => <a href="https://www.reactjs.org"></a>);