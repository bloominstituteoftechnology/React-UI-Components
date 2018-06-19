import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={props.buttonStyle}>{props.buttonNumber}</button>
    );
};

NumberButton.defaultProps = {
    buttonNumber: 'default text',
    buttonStyle: 'default-button-styles'
};
 
export default NumberButton;
