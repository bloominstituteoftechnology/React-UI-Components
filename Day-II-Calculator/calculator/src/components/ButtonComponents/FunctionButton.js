import React from 'react';
import './Button.css';

const FunctionButton = props => {
    return (
        <button className={'function-button ${props.color}'}>
          {props.text}
          {props.children}
          {props.className}
        
          </button>
    );
};

export default FunctionButton;