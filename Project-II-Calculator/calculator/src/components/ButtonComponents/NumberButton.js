import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button onClick={props.fun}className={props.buttonStyle}>{props.text}</button>
    );
  };

  NumberButton.defaultProps = {
    buttonStyle: 'number-btn',
  }

export default NumberButton;