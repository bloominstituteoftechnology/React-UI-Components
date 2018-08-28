import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';




const CardContainer = () => {
    this.handleClick = () =>{
        window.location.replace("https://www.reactjs.org");
    };
    return (
        <div className='card-container' onClick={this.handleClick}>
            <CardBanner />
            <CardContent />
        </div>
    );
};


export default CardContainer;