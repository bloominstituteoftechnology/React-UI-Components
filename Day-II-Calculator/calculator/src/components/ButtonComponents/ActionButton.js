import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <div onClick={props.handleActionClick} className={props.buttonStyle}>
      {props.value}
    </div>
  );
};

export default ActionButton;
