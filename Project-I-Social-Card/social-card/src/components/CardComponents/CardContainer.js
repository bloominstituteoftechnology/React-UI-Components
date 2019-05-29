import React from 'react';
import './Card.css';
import Banner from './CardBanner';
import Content from './CardContent';

function CardContainer() {
    return <div className="mainCard">
              <Banner />
              <Content />
           </div>
}

export default CardContainer;