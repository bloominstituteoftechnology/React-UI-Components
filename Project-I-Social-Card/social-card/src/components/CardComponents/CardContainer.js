import React from 'react';
import './Card.scss';

const CardContainer = props => {
    return (
        <div className = 'card-container' onClick ={clickAction}>
            {props.children}
        </div>
    );
}

function clickAction() {
    window.location.href = "https://www.reactjs.org";
}

export default CardContainer;