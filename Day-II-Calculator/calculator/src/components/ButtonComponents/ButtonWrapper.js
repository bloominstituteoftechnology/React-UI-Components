import React from 'react';
import './Button.css';

function ButtonWrapper(props) {
  return (
    <div className={'button-wrapper ${props.type}'}>
      {props.childData}
    </div>
  );
};

export default ButtonWrapper;