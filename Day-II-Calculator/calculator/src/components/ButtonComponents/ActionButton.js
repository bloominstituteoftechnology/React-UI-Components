import React from 'react';
import './Button.css';

const ActionButton = props => {
  return(
    <button className={`btn actionBtn ${props.styles}`}>{props.text}</button>
  );
};

ActionButton.defaultProps = {
  text: 'err',
}

export default ActionButton;
