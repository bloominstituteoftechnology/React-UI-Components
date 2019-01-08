import React from 'react';
import './Button.css';

const CalcButton = props => (
  props.btnBorder === true ? <div className='num-btn btn-borders'>{props.innerBTN}</div> : <div className={`num-btn ${props.addClass}`}>{props.innerBTN}</div>
)

export default CalcButton;