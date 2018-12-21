import React from 'react';
import './Card.css';

function CardContent (props) {
    return(
        <React.Fragment>
            <p>{props.title}</p>
        </React.Fragment>
    )
}

export default CardContent;