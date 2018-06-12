import React from 'react';
import './Button.css';

const NumberButton = props => {
    // const clickHandler = ()=> {
    // Display.text = this.text;
    // };
  return (
      <button className = {`numbers ${props.customStyleProp}`}>{props.text} 
      </button> 
    
  );
};

export default NumberButton;