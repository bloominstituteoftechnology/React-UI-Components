import React from 'react';
import './Display.css';

const Display = (props) => {
return (
  <div className="display">
   {props.displayValue}
  </div>
);
}

export default Display;
