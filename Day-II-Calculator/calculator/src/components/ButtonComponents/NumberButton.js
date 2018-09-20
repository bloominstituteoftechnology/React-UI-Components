import React from 'react';
import './Button.css';

const isOperator = val => {
  return !isNaN(val)
}
export const NumberButton = props => (
  <div className={`button ${
    isOperator(props.children) ? null: 'color-red'
  }`}>{props.children}</div>
)
