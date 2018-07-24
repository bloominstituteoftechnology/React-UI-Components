import React from 'react';
import './Button.css';

const ButtonCreator = props => {
    return <div className="button-style">{props.text}</div>
}

const NumberButtons = props => {
  return (
    <ButtonCreator text="1" />
  );
};

export default NumberButtons;
