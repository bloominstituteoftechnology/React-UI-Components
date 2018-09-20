import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function goToLink(url) {
    window.location.href = 'https://www.reactjs.org'
}


const CardContainer = (props) => {
    return (
        <section className='card-container' onClick={goToLink}>
            <CardBanner />
            <CardContent />
        </section>
    );
};

export default CardContainer;