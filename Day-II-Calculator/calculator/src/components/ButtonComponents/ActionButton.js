import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return(
        <button className="actionButton">{props.symbol}</button>
    )
}

export default ActionButton;