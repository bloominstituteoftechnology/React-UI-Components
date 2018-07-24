import React from 'react';
import './Button.css';

const Action = props => {
  return (
    <button className={`${props.className}`}>{props.text}</button>
  );
};

export default Action;
