import React from 'react';
import './Button.css';

type Props = {
  children: number,
  className?: string,
  onClick: any
};

const NumberButton = (props: Props) => (
  <div className={`NumberButton ${props.className}`} onClick={props.onClick}>
    {props.children}
  </div>
);

export default NumberButton;
