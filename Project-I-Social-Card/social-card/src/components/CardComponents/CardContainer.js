import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';


function CardContainer() {
    return(
        <a href='https://reactjs.org' className='card-link'>
            <div className='card-container'>
                <div className='card-box'>
                    <CardBanner />
                    <CardContent />
                </div>
            </div>
        </a>
    )
}

export default CardContainer;