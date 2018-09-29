import React from 'react';
import './Card.css';

const CardContainer = props => {
    return (
        <div className="card-container-container">
            <div className="card-container">
                <a href="https://www.reactjs.org/">
                    <CardBanner />
                    <CardContent />
                </a>
            </div>
        </div>
    );
};

export default CardContainer;