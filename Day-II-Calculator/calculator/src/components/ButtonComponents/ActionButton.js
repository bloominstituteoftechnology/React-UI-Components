import React from 'react';
import './Button.css';

const ActionButton = props => {
  return(
    <button className="button">
      <div>{props.text}</div>
    </button>
  );
};

export default ActionButton;