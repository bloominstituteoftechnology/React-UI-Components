import React from 'react';
import './Button.css';

const ActionButton = ({ onClick, buttonStyle, text }) => {
  return (
    <button onClick={onClick} className={buttonStyle}>
      {text}
    </button>
  );
};

export default ActionButton;
