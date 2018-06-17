import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <CardBanner />
                </div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-10">
                    <CardContent />
                </div>
            </div>
        </div>
    )
}

export default CardContainer;