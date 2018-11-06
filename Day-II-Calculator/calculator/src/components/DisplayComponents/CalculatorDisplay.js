import React from 'react';
import './Display.css';

const Display = (props) => {
  return <div className="display" text={props.display} value="props.state" onChange={props.handleInputChange}>{props.calcDisplay}</div>
}

export default Display;