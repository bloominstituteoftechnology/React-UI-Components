import React from 'react';
import './Card.scss';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {

    function goToReact(e) {
        window.location.href = `https://www.reactjs.org`;
    }
    return (
        <div className = 'main-container' onClick={goToReact}>
            <CardBanner/>
            <CardContent/>
        </div>
    )
}

export default CardContainer;
