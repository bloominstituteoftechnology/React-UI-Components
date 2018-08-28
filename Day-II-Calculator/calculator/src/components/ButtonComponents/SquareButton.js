import React from 'react';
import './Button.css';

const SquareButton = props => {
    return (
        <button className={`square-button ${props.buttonStyle}`}>
            {props.text}
        </button>
    );
}

export default SquareButton;