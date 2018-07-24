import React from 'react';
import './Button.css';

const ActionButton = props => {
  return(
    <button className={`actionBtn ${props.style}`}>{props.text}</button>
  );
};

ActionButton.defaultProps = {
  text: 'err',
}

export default ActionButton;
