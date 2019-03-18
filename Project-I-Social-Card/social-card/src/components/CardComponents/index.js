import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = (props) => {
    return <div className="post-card">
             <CardBanner src={props.img} />
             <CardContent title={props.title} content={props.content} url={props.url} />
           </div>;
};

export default CardContainer;
