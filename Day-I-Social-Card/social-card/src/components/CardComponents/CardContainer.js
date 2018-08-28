import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js'
import CardContent from './CardContent.js'

const CardContainer = () => (
    <a href ="https://react.org">
        <div className="CardContainer">
            <CardBanner/>
            <CardContent/>
        </div>
    </a>
);

export default CardContainer;
