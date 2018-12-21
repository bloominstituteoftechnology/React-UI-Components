import React from 'react';
import './Button.css';

const NumberButton = props => (
  props.btnBorder === true ? <div className='num-btn btn-borders'>{props.num}</div> : <div className='num-btn'>{props.num}</div>
)

export default NumberButton;