import React from 'react';
import './Button.css';




const MathButton = props => {
    return (
        <button className={props.buttonStyle}>{props.text}</button>
    );
  };
  
  MathButton.defaultProps = {
    buttonStyle: 'math-btn',
  }
export default MathButton;