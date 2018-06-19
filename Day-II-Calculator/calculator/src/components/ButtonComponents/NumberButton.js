import React from 'react';
import './Button.css';

const NumberButton = props => {
    
    const clickHandler = () => {
        alert(props.buttonNumber);
    }
    
    return (
        <button 
            onClick={() => clickHandler()}
            className={props.buttonStyle}>
                {props.buttonNumber}
        </button>
    );
};

NumberButton.defaultProps = {
    buttonNumber: 'default text',
    buttonStyle: 'default-button-styles'
};
 
export default NumberButton;
