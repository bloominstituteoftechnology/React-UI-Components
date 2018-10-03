import React from 'react';
import './Button.css';

const ClearBtn = props => {
  return <button className='clearBtn'>{props.clear}</button>;
}

export default ClearBtn;