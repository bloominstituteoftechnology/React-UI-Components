import React from 'react';

function NumberButton(props) {
    return (
        <button className={props.buttonStyle} value={props.text}>
            {props.text}
        </button>
    );
}

export default NumberButton;
