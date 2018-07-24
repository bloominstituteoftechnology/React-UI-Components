import React from 'react';
import './Button.css';

const Container = props => {
  return (
    <div className={`row ${props.className}`}>{props.children}</div>
  );
};

export default Container;
