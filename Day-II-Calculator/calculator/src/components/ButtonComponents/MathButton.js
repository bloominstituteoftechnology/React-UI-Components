import React from 'react';
import './Button.css';



function MathButtons(props) {
    return (
      <div className="maths">
        <h3>{props.theMaths.symbol}</h3>
      </div>
    );
  }

  export default MathButtons