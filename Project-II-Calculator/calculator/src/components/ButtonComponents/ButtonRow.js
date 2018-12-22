import React from 'react';
import './Button.css';
import CalcButton from './CalcButton';

const ButtonRow = props => (
  <div className={props.className}>
    {props.range.map(num => num === props.range[1] ? <CalcButton btnBorder={true} innerBTN={num} /> : <CalcButton btnBorder={false} innerBTN={num} />)}
  </div>
)

export default ButtonRow;