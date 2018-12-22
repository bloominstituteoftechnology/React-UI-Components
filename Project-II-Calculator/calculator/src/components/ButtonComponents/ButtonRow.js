import React from 'react';
import './Button.css';
import CalcButton from './CalcButton';

const ButtonRow = props => (
  <div className={props.className}>
    {props.range.map(num => num === props.range[1] ? <CalcButton btnBorder={true} num={num} /> : <CalcButton btnBorder={false} num={num} />)}
  </div>
)

export default ButtonRow;