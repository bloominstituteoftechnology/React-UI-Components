import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <button onClick={props.clickHandler} data-type={`${props.dataType}`} className={`button ${props.buttonStyle}`}>{props.text}</button>
  )
  
}

ActionButton.defaultProps = {
  buttonStyle: "action",
  text: "X"
}

export default ActionButton