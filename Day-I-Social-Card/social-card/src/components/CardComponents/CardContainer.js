import React from 'react';
import './Card.css';
import CardContent from './CardContent';


const CardContainer = () => {
    return (
        <a href = "https://www.reactjs.org">
            <div className = "card-container">
                <CardContent />
            </div> 
        </a>
    );
};


export default CardContainer; 