import React from 'react';
import './Button.css';

const LongButton = (props) => {
    return (
        <button className = {props.buttonStyle}>
            {props.text}
        </button>
    );
}

LongButton.defaultProps = {
    text: "Enter Number Text",
    buttonStyle: "number",
}

export default LongButton;