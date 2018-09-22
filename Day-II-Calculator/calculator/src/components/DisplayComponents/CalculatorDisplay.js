import React from 'react';
import './Display.css';

const Display = (props) => {
    return (
        <div className = {props.buttonStyle}>
            {props.text}
        </div>
    );
}

Display.defaultProps = {
    text: "0",
    buttonStyle: "display",
}

export default Display;