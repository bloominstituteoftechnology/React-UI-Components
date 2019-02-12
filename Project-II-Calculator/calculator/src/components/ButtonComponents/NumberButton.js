import React from 'react';
import './Button.css';
const NumberButton = ({ onClick, buttonStyle, text }) => {
  return (
    <button onClick={onClick} className={buttonStyle}>
      {text}
    </button>
  );
};

export default NumberButton;
