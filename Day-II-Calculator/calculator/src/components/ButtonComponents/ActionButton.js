import React from 'react';
import './Button.css';

// make the clear button font-weight light
const fontWeight = val => {
  return !isNaN(val) || val === '='
}
export const ActionButton = props => (
  <div className={`clear-button ${
    fontWeight(props.children) ? null: 'no-bold'
  }`}>{props.children}</div>
)
