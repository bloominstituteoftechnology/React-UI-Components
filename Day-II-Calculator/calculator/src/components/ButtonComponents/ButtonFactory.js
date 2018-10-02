import React from 'react';
import './Button.css';

const ButtonFactory = props => {
  return (
    <button className={`btn-default`}>{props.text}</button>
  );
};

ButtonFactory.defaultProps = {
  text: '0'
};

export default ButtonFactory;
