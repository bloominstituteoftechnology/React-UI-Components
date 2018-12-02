import React from 'react';
import './Button.css';

const ActionButton = (props) => {
  return(
      <button className={`btn-default ${props.buttonStyle}`}>
          <p>{props.text}</p>
      </button>
  );
};

export default ActionButton;