import React from 'react';
import './Card.css';
import CardImage from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return(
        <div>
            <a className="link" href="https://www.reactjs.org" >
            <div className="border" >
                <CardImage />
                <CardContent />
            </div>
            </a>
            
        </div>
    );
};

export default CardContainer;