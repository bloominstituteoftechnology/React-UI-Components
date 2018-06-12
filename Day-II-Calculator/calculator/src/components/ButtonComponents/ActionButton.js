import React from 'react';
import './Button.css';

const ActionButton = props => {
  return(
    <button className={'button--action '+ props.buttonStyle}>
      <div>{props.text}</div>
    </button>
  );
};

export default ActionButton;