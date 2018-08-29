import React from 'react';
import './Button.css';

const RectangleButton = (props) => {
    return (
        // <button className={props.buttonStyle}>
        //     {props.text}
        // </button>
        <input
            type='button'
            className={'rec-button'}
            onClick={props.handleClick}
            value={props.text}
        />
    );
}

export default RectangleButton;