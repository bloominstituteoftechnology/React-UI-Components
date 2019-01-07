import React from 'react';
import './Card.css';

import ReactBackground from './reactbackground.png'

function CardBanner() {
    return (
        <div className='CardBanner'>
            <img src={ReactBackground}></img>
        </div>
    )
}

export default CardBanner;