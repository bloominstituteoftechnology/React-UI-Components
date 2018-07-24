import React from 'react';
import './Display.css';


const Display = props => {
  return (
    <div className="display-style" output="">{props.output}</div>
  );
};

Display.defaultProps = {
  output: 0
}

export default Display;
