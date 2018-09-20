import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


const CardContainer = (props) => {
    return (
        <section className='card-container'>
            <CardBanner />
            <CardContent />
        </section>
    );
};

export default CardContainer;