import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
      <input
        type="button"
        className={props.type === 'action' ? 'button action-button' : 'button input-button'}
        onClick={props.handleClick}
        value={props.label}
         className="NumberButton" 
      />
    );
  }
  
  
  export default Button;