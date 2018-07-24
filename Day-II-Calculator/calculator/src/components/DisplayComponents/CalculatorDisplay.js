import React from 'react';
import './Display.css';


const Display = props => {
  return (
    <div className="display-style" text="">{props.text}</div>
  );
};

Display.defaultProps = {
  text: 0
}

export default Display;
