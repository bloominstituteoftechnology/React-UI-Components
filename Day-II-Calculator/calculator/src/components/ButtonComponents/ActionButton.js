import React from 'react';
import './Button.css';

const ActionButton = props => {
  return(
    <button className={`btn-default ${props.customButton}`}>{props.text}</button>
  );
};

export default ActionButton;
