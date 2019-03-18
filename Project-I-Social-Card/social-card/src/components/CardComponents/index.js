import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = (props) => {
    return <div className="post-card">
             <a href={props.url}>
               <CardBanner src={props.img} />
               <CardContent title={props.title} content={props.content} url={props.url} />
             </a>
           </div>;
};

export default CardContainer;
