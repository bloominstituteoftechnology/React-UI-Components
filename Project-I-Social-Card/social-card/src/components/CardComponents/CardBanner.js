import React from 'react';
import reactImage from '../../images/reactbackground.png';
import './Card.css';

const CardBanner = () => {
    return (
        // <div className="cardBanner">  
        // </div>

        <div className="cardBanner">
            <img src={reactImage}
            alt="React logo" />
        </div>
        
    )
}

export default CardBanner