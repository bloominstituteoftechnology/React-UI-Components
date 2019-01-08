import React from 'react';
import './Button.css';

const WideButton = props => {
  return (
    <p
      className={`button wide-button ${props.fontWeight}`}
      onClick={props.clicked}
    >
      {props.text}
    </p>
  );
};

export default WideButton;
