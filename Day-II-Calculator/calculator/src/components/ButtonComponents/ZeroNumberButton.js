import React from 'react';
import './Button.css';

const ZeroNumberBtn = props => {
  return <button className='zeroNumBtn'>{props.number}</button>;
}

export default ZeroNumberBtn;