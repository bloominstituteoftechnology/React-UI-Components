import React from 'react';
import './Button.css';

const NumButton = props => {
  return (
    <button className={`btn-styles ${props.spec}`}>{props.text}</button>
  )
};

export default NumButton;