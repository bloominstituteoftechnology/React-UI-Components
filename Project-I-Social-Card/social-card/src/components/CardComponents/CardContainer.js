import React from 'react';
import './Card.css';
import Banner from './CardBanner';
import Content from './CardContent';

function CardContainer() {
    return <div className="mainCard">
              <div className="card">
                <Banner />
                <Content />
              </div>  
           </div>
}

export default CardContainer;