import React from 'react';
import './Button.css';

const NumberButton = props => {
  const { clickHandler, value, func } = props;
    return (
    <button className='numberButton' onClick={clickHandler} value={value}>
    {func} {value}
    </button>
    );
};
export default NumberButton;