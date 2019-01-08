import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div className="card-container">
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <div className="card-img">
            <CardBanner/>
            </div>
            <div className="card-text">
            <CardContent/>
            </div>
        </a>  
        </div>
    );
}


export default CardContainer;