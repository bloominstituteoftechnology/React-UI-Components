import React from 'react';
import CardBanner from './CardBanner';
import CardConent from './CardContent';
import './Card.css';


const CardContainer = () => {
    return (
        <section className='mainContent'>
            <CardBanner />
            <CardConent />
        </section>
    )
}
export default CardContainer;