import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

function CardContainer() {
    return (
        <section onClick={openLink} className='card-container'>
        <CardBanner src='https://ibin.co/3wnC6SgIOJud.png' />
        <CardContent title='Get started with React' content='React makes it painless to create interactive UIs.  Design simple views for each state in your application.' href='reactjs.org' />
        </section>
    );
}

function openLink() {
    window.open('https://reactjs.org');
}

export default CardContainer;