import React from 'react';
import './Card.css';

const CardContent = props => (
    <div class="card-content">
        <span class="card-title">{props.postTitle}</span>
        <p class="card-body">{props.children}</p>
        <a class="card-referer" href={props.postUrl}>
            {props.postUrl}
        </a>
    </div>  
);

export default CardContent;