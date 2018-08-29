import React from 'react';
import './Button.css';

const SquareButton = props => {
    return (
        // <button className={`square-button ${props.buttonStyle}`}>
        //     {props.text}
        // </button>
        <input
            type='button'
            className={`square-button ${props.buttonStyle}`}
            value={props.text}
            onClick={props.handleClick}
            
        />
    );
}

export default SquareButton;