import React from 'react';
import './Card.css';
import CardContent from './CardContent'
import CardBanner from './CardBanner'
 const CardContainer = props => {
    return (
        <div className='cardContainerWrapper'>
            <div className='cardWrapper'>
            <a href='https://www.reactjs.org/'>
                <CardBanner />
                <CardContent />
                </a>
            </div>
        </div>
    );
};
export default CardContainer;