import React from 'react';
import '../../index.css';

const ActionButton = props => {
  return (
    <div>
      <button
        className={`action-button ${props.buttonStyle}`}
        onClick={props.handleClick}
      >
        {props.text}
      </button>
    </div>
  );
};

export default ActionButton;
