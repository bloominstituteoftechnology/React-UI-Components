import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
      <button className = {`numbers ${props.customStyleProp}`}>{props.text} 
      </button> 
    
  );
};

export default NumberButton;