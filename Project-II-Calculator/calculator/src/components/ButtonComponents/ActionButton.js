import React from 'react';
import './Button.css';


const ActionButton = props => {
  return (
    <div>
      <button className={props.buttonStyle}>{props.symbol}</button>
    </div>
  );
}

export default ActionButton;