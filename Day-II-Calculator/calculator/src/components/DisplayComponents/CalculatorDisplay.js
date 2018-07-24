import React from 'react';
import './Display.css';

const Display = props => {
  return(
    <div className="calculator-value">{props.value}</div>
  );
};

Display.defaultProps = {
  value: '0',
}

export default Display;
