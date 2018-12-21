import React from 'react';
import './Card.css';

function CardBanner (props) {
    return(
        <React.Fragment>
            <p>{props.title}</p>
        </React.Fragment>
    )
}


export default CardBanner;