import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return <a href='https://reactjs.org/' target="_blank" className='custom-card-img'><div className="card-container">
    <CardBanner />
    <CardContent />
    </div></a>;
}

// const card = document.querySelector('.card-container');

// card.addEventListener('click', )

export default CardContainer;