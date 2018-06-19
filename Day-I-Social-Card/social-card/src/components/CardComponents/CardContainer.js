import React from 'react';
import './Card.css';
import CardContent from './CardContent';


const CardContainer= () => {
    return (
        <div className="card-wrapper">
            <a href= "https://www.reactjs.org"> 
                <CardContent />
            </a>    
        </div>
    );
};

export default CardContainer;