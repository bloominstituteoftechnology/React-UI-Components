import React from 'react';
import './Button.css';


const ActionButton = (props) => {
    return (
      <input
        type="button"
        className={props.type === 'action' ? 'button action-button' : 'button input-button'}
        onClick={props.handleClick}
        value={props.label}
         className="ActionButton" 
      />
    );
  }
export default ActionButton;




