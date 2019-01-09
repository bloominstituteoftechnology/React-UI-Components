import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <React.Fragment>
      <button
        className={props.actionStyle}
        onClick={props.handleClick}
        datavalue={props.text}
      >
        {props.text}
      </button>
    </React.Fragment>
  );
};

export default ActionButton;

// onClick={props.clearDisplay}
