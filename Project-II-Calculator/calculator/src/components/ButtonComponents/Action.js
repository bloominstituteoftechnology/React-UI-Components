import React from 'react';
import './Button.css';

const Action = props => {
  return (
    <button className={`action-btn ${props.className} ${props.text}`}>
      {props.text}
    </button>
  );
};

export default Action;