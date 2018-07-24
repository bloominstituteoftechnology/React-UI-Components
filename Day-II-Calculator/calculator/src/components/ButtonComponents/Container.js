import React from 'react';
import './Button.css';

const Container = props => {
  return (
    <button className={`row ${props.className}`}>{props.children}</button>
  );
};

export default Container;
