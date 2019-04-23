import React from 'react';
import './Button.css';

const ActionButton = props => {
    return(
        <button className = "btn-action">
            {props.text}
        </button>

    );
}

export default ActionButton;
