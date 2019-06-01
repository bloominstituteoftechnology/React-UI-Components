import React from 'react';
import './Button.css';

const SymbolsButton = (props) => {
  return (
    <button className={`${props.buttonStyle}`}>{`${props.text}`}</button>
  );
};

export default SymbolsButton;