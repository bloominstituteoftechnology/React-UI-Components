import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return <a href='https://reactjs.org/' target="_blank" className="card-container">
    <CardBanner />
    <CardContent />
    </a>;
}

// const card = document.querySelector('.card-container');

// card.addEventListener('click', )

export default CardContainer;