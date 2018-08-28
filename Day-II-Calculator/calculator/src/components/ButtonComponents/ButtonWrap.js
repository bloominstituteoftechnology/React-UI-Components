import React from 'react';
import './Button.css';

// adding a button wrapper to make formatting of components easier

function ButtonWrap(props) {
  return (
    <div className = {'button-wrap ${props.type}'}>
    {props.childData}
    </div>
  );
};

export default ButtonWrap;
