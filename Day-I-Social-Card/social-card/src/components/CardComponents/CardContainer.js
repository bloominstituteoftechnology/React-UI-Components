import React from 'react';
import './Card.css';


const CardContainer = () => {
    return (
        <div className={'card-container'}><CardContent />
            <div className={'image'}><CardBanner />
            </div>
        </div>
    );
};

export default CardContainer;