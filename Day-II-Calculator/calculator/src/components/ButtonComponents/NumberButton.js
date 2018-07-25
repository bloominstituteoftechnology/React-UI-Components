import React from 'react';
import './Button.css';

const NumberButton = props => {
    return(
        <button className={`smallButton ${props.buttonStyle}`}>
            {props.text}
        </button>
    );
}

NumberButton.defaultProps = {
    buttonStyle: 'align'
};

export default NumberButton;