

import React from 'react';
import './Button.css';

const BtnContainer = props => {
  return (
    <div className={`btnContainer ${props.className}`}>
      {props.children}
    </div>
  );
};

export default BtnContainer;