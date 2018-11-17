import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = props => {
    return (
        <div className="card-container">
        <div className="card-container-content">
            <CardBanner />
                <a href="https://www.reactjs.org">
                    <CardContent />
                </a>

        </div>
        </div>
    );
};

export default CardContainer;