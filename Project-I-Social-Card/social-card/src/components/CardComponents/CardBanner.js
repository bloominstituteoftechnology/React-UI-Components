import React from 'react';
import './Card.css';

const CardBanner = (props) => {
    return <div className="post-card-img-container">
             <img src={props.src} />
           </div>;
};

export default CardBanner;
