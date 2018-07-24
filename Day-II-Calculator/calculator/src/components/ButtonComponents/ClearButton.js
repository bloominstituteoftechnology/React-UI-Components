import React from 'react';
import './Button.css';

const ClearButton = props => {
  return (
      <div className={`${props.buttonStyle}`} text="props.text">{props.text}</div>
  );
};

export default ClearButton;
