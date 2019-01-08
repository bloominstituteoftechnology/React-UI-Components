import React from 'react';
import './Button.css';

const WideButton = props => {
  return (
    <p className={`button wide-button ${props.fontWeight}`}> {props.text} </p >
  );
};

export default WideButton;
