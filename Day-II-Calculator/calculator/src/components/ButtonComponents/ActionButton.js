import React from 'react';
import './Button.css';

type Props = {
  children: string,
  className?: string,
  onClick: any
};

const ActionButton = (props: Props) => (
  <div className={`ActionButton ${props.className}`} onClick={props.onClick}>
    {props.children}
  </div>
);

export default ActionButton;
