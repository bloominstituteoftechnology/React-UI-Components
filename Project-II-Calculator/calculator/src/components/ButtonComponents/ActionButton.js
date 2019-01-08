import React from 'react';
import './Button.css';




const ActionButton = props => {
  console.log(props.hold)
  console.log(props.test)
    return (
        <button onClick={props.handleClick} className={props.buttonStyle}>{props.text}</button>
    );
  };
  
  ActionButton.defaultProps = {
    buttonStyle: 'action-btn',
  }
export default ActionButton;