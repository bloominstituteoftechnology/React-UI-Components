import React from 'react';
import './Button.css';

ButtonWrap = props => {
  return <div className={'button-wrap ${props.type}'}>{props.childData}</div>;
};

export default ButtonWrap;
