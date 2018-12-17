import React from 'react';
import './Card.css';

function CardContent(props){
    return(
        <div className="card-content">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a href="reactjs.org">reactjs.org</a>
        </div>
    )
}

export default CardContent;
