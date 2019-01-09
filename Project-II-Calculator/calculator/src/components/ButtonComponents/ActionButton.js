import React from 'react';
import './Button.css';




const ActionButton = props => {

    return (
        <button onClick={props.fun} className={props.buttonStyle}>{props.text}</button>
    );
  };
  
  ActionButton.defaultProps = {
    buttonStyle: 'action-btn',
  }
export default ActionButton;