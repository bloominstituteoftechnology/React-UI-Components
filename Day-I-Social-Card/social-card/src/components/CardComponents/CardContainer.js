import React from 'react';
import './Card.css';

import Banner from './CardBanner';
import Content from './CardContent';

const CardContainer = () =>{
    return(
        <div className="card-container">
            <Banner />
            <Content />
        </div>
    )
};

export default CardContainer;