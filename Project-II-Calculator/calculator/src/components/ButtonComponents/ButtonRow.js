import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

const ButtonRow = props => (
  <div className={props.className}>
    {props.range.map(num => num === props.range[1] ? <NumberButton btnBorder={true} num={num} /> : <NumberButton btnBorder={false} num={num} />)}
  </div>
)

export default ButtonRow;