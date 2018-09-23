import React from 'react';
import './Button.css';

const NumberButton = (props) => {
      return (
          <div className={`smallButton ${props.color}`}>{props.text}</div>
    );
}

export default NumberButton;