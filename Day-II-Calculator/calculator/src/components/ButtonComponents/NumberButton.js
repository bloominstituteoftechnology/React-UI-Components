import React from 'react';
import './Button.css';

type Props = {
  children: number,
  className?: string
};

const NumberButton = (props: Props) => (
  <div className={`NumberButton ${props.className}`}>{props.children}</div>
);

export default NumberButton;
