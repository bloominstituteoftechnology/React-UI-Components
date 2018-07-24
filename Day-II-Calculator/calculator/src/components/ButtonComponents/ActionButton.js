import React from 'react';
import './Button.css';

type Props = {
  children: string,
  className?: string
};

const ActionButton = (props: Props) => (
  <div className={`ActionButton ${props.className}`}>{props.children}</div>
);

export default ActionButton;
