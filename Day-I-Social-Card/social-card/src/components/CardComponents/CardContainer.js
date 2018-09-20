import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const lambdaSchool = require('../../DB/lambdaSchool');

function goToLink(url) {
    window.location.href = 'https://www.reactjs.org'
}


const CardContainer = (props) => {
    return (
        <section className='card-container' onClick={goToLink}>
            <CardBanner {...lambdaSchool} />
            <CardContent {...lambdaSchool} />
        </section>
    );
};

export default CardContainer;