import React from 'react';
import reactBanner from '../../img/react-logo-og.png';

import './Card.css';

const CardBanner = () => {
    return (
        <div>
            <img className='banner' src={reactBanner} alt='react logo' />
        </div>
    )
};

export default CardBanner;
