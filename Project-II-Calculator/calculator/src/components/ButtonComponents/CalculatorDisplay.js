import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return <div className='display'>{props.count}</div>;
};

  export default CalculatorDisplay;