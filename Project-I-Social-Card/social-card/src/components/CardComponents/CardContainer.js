import React from 'react';
import './Card.css';

import { Banner } from './CardBanner';
import { CardContent } from './CardContent';

function CardContainer() {
    return (
    <a href="https://www.reactjs.org">
    <div className="cardcontain">
    <Banner />
    <CardContent />
    </div>
    </a>
    )
}


export default CardContainer;