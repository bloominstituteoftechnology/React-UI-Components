import React from 'react';
import './Card.css';

const CardContent = (props) => {
    return <div className="post-card-content">
             <h2>{props.title}</h2>
             <p>{props.content}</p>
             <a href={props.url}>{(new URL(props.url)).hostname.replace(/^www\./g, '')}</a>
           </div>;
};

export default CardContent;
