import React from 'react';
import './Button.css';

const RectangleButton = (props) => {
    return (
        <button className={props.buttonStyle}>
            {props.text}
        </button>
    );
}

export default RectangleButton;